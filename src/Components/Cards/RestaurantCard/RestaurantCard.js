import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const RestaurantCard = ({ restaurante }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={restaurante?.logo}
        title={restaurante?.nome}
      />
      <CardContent>
        <Typography variant="h5" mb={1}>{restaurante?.nome}</Typography>
        <Typography variant="body2"><b>Endereço:</b> {restaurante?.endereco}</Typography>
        <Typography variant="body2"><b>Contato:</b> {restaurante?.email}</Typography>
        <Typography variant="body2"><b>Razão Social:</b> {restaurante?.cnpj}</Typography>
        <Typography variant="body2"><b>Categoria:</b> {restaurante?.categoria}</Typography>
        <Typography variant="body2"><b>Média de Entrega:</b> {restaurante?.media_entrega} minutos</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => setOpenModal(!openModal)}
        >
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
