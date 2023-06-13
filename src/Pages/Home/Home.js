import React from "react";
import Permission from "../../Contexts/Permission";
import {
  Box,
  Container,
} from "@mui/material";
import CadastrarMenuIcon from "../../images/cadastrar-menu.svg";
import VerPedidosIcon from "../../images/ver-pedidos.svg";
import FlashCaixaIcon from "../../images/flash-caixa.svg"

import HomeCard from "../../Components/Cards/HomeCard/HomeCard";

const Home = () => {
  return (
    <Permission permissions={["admin", "gestor", "cliente"]}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <HomeCard
            image={CadastrarMenuIcon}
            title="Cadastar Cardápio"
            route="/menus/create"
          />
          <HomeCard
            image={FlashCaixaIcon}
            title="Flash de Caixa"
            route="/flashdecaixa"
          />

          <HomeCard
            image={VerPedidosIcon}
            title="Histórico de Pedidos"
            route="/orders"
          />
        </Box>
      </Container>
    </Permission>
  );
}

export default Home
