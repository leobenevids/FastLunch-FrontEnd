import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EditMenu from "../../Modals/EditMenu"

const MenuCard = ({ nomePrato, fotoPrato, descricaoPrato, valor, id }) => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <EditMenu openModal={openModal} setOpenModal={setOpenModal} menuId={id} />
      <CardMedia sx={{ height: 140 }} image={fotoPrato} title={nomePrato} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nomePrato}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descricaoPrato}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          R$ {valor}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton size="small" color="primary" onClick={() => setOpenModal(!openModal)}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
