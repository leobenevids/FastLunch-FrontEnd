import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRestaurantOrdersHistory } from "../../../util/apiHelper";
import OrderCard from "../../../Components/Cards/Order";
import Title from "../../../Components/Layout/Title";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const History = () => {
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const restaurantId = JSON.parse(localStorage.getItem("usuario")).id;

  const getOrderHistory = async () => {
    try {
      const response = await getRestaurantOrdersHistory(restaurantId);
      setOrdersHistory(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, []);

  return (
    <Box sx={{ width: "100%" }} mt={2}>
      <Title title="Histórico de Pedidos" />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {ordersHistory && ordersHistory.length ? (
            ordersHistory.map((order) => (
              <Grid item xs={12} sm={6} md={4} key={order._id}>
                <OrderCard
                  nomeCliente={order.cliente}
                  fotoPrato={order.foto}
                  dataPedido={order.data}
                  endereco={order.endereco_entrega}
                  status={order.status}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5">
                <SearchOffIcon /> Nenhum histórico de pedidos para esse restaurante.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default History;
