import { useEffect, useState } from "react";
import { getOrders, getRestaurantOrders } from "../../../util/apiHelper";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import OrderCard from "../../../Components/Cards/Order";
import Title from "../../../Components/Layout/Title";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const ShowOrders = () => {
  const [orders, setOrders] = useState([]);
  const restaurantId = JSON.parse(localStorage.getItem("usuario")).id;
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await getRestaurantOrders(restaurantId);
      // const response = await getOrders();
      setOrders(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Box sx={{ width: "100%" }} mt={2}>
      <Title title={"Pedidos"} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {orders && orders.length ? (
            orders.map((order) => (
              <Grid item xs={12} sm={6} md={4} key={order.cliente}>
                <OrderCard
                  nomeCliente={order.cliente}
                  fotoPrato={order.foto}
                  dataPedido={order.data}
                  endereco={order.endereco}
                  status={order.status}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5">
                <SearchOffIcon /> Nenhum pedido realizado nesse restaurante.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ShowOrders;
