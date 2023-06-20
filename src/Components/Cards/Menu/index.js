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
import EditMenu from "../../Modals/EditMenu";
import { deleteMenu } from "../../../util/apiHelper";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const MenuCard = ({ menu }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteMenu(menu?._id);
    navigate(0);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <EditMenu
        openModal={openModal}
        setOpenModal={setOpenModal}
        menuId={menu?._id}
      />
      <CardMedia sx={{ height: 140 }} image={menu?.foto} title={menu?.nome} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {menu?.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {menu?.descricao}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          R$ {menu?.valor_atual}
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
            Deseja realmente excluir este cardápio?
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
            cardápio.
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

export default MenuCard;
