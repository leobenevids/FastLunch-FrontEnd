import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMenus } from "../../../util/apiHelper";

import MenuCard from "../../../Components/Cards/MenuCard/MenuCard";
import Title from "../../../Components/Title/Title";

const MostrarMenu = () => {
  const [menus, setMenus] = useState([]);

  const getMenusData = async () => {
    const response = await getMenus();
    setMenus(response);
  };

  useEffect(() => {
    getMenusData();
  }, []);

  return (
    <Box mt={2}>
      <Title title={"Cardápios"} />
      <Grid container spacing={2}>
        {menus.length ? (
          menus.map((menu) => (
            <Grid item xs={12} sm={6} md={4} key={menu.id}>
              <MenuCard
                nomePrato={menu.nome}
                fotoPrato={menu.foto}
                descricaoPrato={menu.descricao}
                valor={menu.valor_atual}
                id={menu.id}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box>Sem menus cadastrados</Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MostrarMenu;
