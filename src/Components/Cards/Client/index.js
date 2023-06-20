import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { deleteClient } from "../../../util/apiHelper";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const ClientCard = ({ nome, bairro, rua, telefone, foto, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteClient(id);
    navigate(0);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={
          foto ||
          "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg"
        }
        title={nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Endereço:</b> {bairro} - {rua}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          <b>Telefone: </b>
          {telefone}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => setShowModal(!showModal)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          size="small"
          color="error"
          onClick={() => setOpenDialog(!openDialog)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6">Deseja realmente excluir {nome}?</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="h6" color="error">
            <WarningAmberRoundedIcon color="error" />
            Atenção:{" "}
          </Typography>
          <Typography>
            Essa ação é irreversível e apagará todos os dados de cadastro deste
            cliente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setOpenDialog(!openDialog)}>
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDelete()} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ClientCard;
