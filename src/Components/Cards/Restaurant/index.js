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
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRestaurant from "../../Modals/EditRestaurant";
import { deleteRestaurant } from "../../../util/apiHelper";
import { useNavigate } from "react-router-dom";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const RestaurantCard = ({ restaurante }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteRestaurant(restaurante?._id);
    navigate(0);
  };

  return (
    <Card sx={{ minWidth: 350 }}>
      <EditRestaurant
        openModal={openModal}
        setOpenModal={setOpenModal}
        restaurantName={restaurante?.nome}
        restaurantId={restaurante?._id}
      />
      <CardMedia
        sx={{ height: 250 }}
        image={restaurante?.logo}
        title={restaurante?.nome}
      />
      <CardContent>
        <Typography variant="h5" mb={1}>
          {restaurante?.nome}
        </Typography>
        <Typography variant="body2">
          <b>Endereço:</b> {restaurante?.endereco}
        </Typography>
        <Typography variant="body2">
          <b>Contato:</b> {restaurante?.email}
        </Typography>
        <Typography variant="body2">
          <b>Razão Social:</b> {restaurante?.cnpj}
        </Typography>
        <Typography variant="body2">
          <b>Categoria:</b> {restaurante?.categoria}
        </Typography>
        <Typography variant="body2">
          <b>Média de Entrega:</b> {restaurante?.media_entrega} minutos
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => setOpenModal(!openModal)}
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
          <Typography variant="h6">
            Deseja realmente excluir {restaurante?.nome}?
          </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="h6" color="error">
            <WarningAmberRoundedIcon color="error" />
            Atenção:{" "}
          </Typography>
          <Typography>
            Essa ação é irreversível e apagará todos os dados de cadastro deste
            restaurante.
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

export default RestaurantCard;
