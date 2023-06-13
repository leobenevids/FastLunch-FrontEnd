import React from "react";
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

const OrderCard = ({ nomeCliente, fotoPrato, dataPedido, endereco, status }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={fotoPrato} title={nomeCliente} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Cliente</b>: {nomeCliente}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Endereço</b>: {endereco}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Data do pedido</b>: {dataPedido}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Status</b>: {status}
        </Typography>
      </CardContent>
      {/* <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton size="small" color="primary">
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default OrderCard;
