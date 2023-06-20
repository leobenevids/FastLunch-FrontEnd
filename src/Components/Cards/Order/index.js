import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { finishOrder, getMenu } from "../../../util/apiHelper";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const [menuImage, setMenuImage] = useState(order?.restaurante_logo);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Sao_Paulo", // Set the desired time zone, like 'America/Sao_Paulo'
    };
    return date.toLocaleDateString("pt-BR", options);
  };

  const findMenuImage = async (menu_id) => {
    const { foto } = await getMenu(menu_id);
    setMenuImage(foto);
  };

  const finish = async (order_id) => {
    await finishOrder(order_id);
    navigate("/history");
  };

  useEffect(() => {
    findMenuImage(order?.cardapio_id);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={menuImage}
        title={order?.restaurante_nome}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Endereço</b>: {order?.endereco_entrega}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Data e Hora do Pedido</b>: {formatDate(order?.data_pedido)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Observação</b>: {order?.observacao}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Valor</b>: {order?.valor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Status</b>: {order?.status}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          color="success"
          variant="contained"
          sx={{ color: "#fff" }}
          onClick={() => finish(order?._id)}
        >
          Finalizar pedido <CheckCircleIcon fontSize="small" sx={{ ml: 1 }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderCard;
