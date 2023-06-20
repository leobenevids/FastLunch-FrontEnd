import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getMenus, getRestaurantMenus } from "../../../util/apiHelper";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import MenuCard from "../../../Components/Cards/Menu";
import Title from "../../../Components/Layout/Title";

const ShowMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const restaurantId = JSON.parse(localStorage.getItem("usuario")).id;

  const getMenusData = async () => {
    try {
      const response = await getRestaurantMenus(restaurantId);
      setMenus(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenusData();
  }, []);

  return (
    <Box mt={2} sx={{ width: "100%" }}>
      <Title title={"Cardápios"} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {menus && menus.length ? (
            menus.map((menu) => (
              <Grid item xs={12} sm={6} md={4} key={menu._id}>
                <MenuCard
                  nomePrato={menu.nome}
                  fotoPrato={menu.foto}
                  descricaoPrato={menu.descricao}
                  valor={menu.valor_atual}
                  id={menu._id}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5">
                <SearchOffIcon /> Nenhum cardápio cadastrado nesse restaurante.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ShowMenus;
