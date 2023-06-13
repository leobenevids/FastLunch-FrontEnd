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

const ClientCard = ({ nome, bairro, rua, telefone, foto }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={foto} title={nome} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Endereço:</b> {bairro} - {rua}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          <b>Telefone: </b>{telefone}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton size="small" color="primary" onClick={() => setShowModal(!showModal)}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ClientCard;
