import React from "react";
import Permission from "../../Contexts/Permission";
import { Box, Container } from "@mui/material";
import CadastrarMenuIcon from "../../images/cadastrar-menu.svg";
import VerPedidosIcon from "../../images/ver-pedidos.svg";
import FlashCaixaIcon from "../../images/flash-caixa.svg";

import HomeCard from "../../Components/Cards/HomeCard/HomeCard";

const Home = () => {
  return (
    <Permission permissions={["admin", "gestor", "cliente"]}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "70vh",
          alignItems: "center",
        }}
      >
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
    </Permission>
  );
};

export default Home;
