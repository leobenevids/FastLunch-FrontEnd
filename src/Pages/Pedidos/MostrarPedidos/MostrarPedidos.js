import { useEffect, useState } from "react";
import { getOrders } from "../../../util/apiHelper";
import { Container, Grid } from "@mui/material";
import OrderCard from "../../../Components/Cards/OrderCard/OrderCard";
import Title from "../../../Components/Title/Title";

const MostrarPedidos = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await getOrders();
    setOrders(response);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Container>
      <Title title={"Pedidos"}/>
      <Grid container spacing={2}>
        {orders.length ? (
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
          <h1>Nenhum pedido realizados</h1>
        )}
      </Grid>
    </Container>
  );
}

export default MostrarPedidos
