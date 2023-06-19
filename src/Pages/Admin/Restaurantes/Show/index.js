import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import Title from "../../../../Components/Layout/Title";
import RestaurantCard from "../../../../Components/Cards/Restaurant";
import { getRestaurants } from "../../../../util/apiHelper";

function ShowRestaurants() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRestaurants = async () => {
    try {
      const response = await getRestaurants();
      setRestaurants(response);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Title title="Restaurantes Cadastrados" />
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          mt={2}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurante={restaurant} />
            ))
          ) : (
            <h1>Nenhum restaurante cadastrado</h1>
          )}
        </Box>
      )}
      <Button
        variant="outlined"
        onClick={() => navigate("/admin/restaurants/create")}
        sx={{ width: 200, marginTop: "1rem" }}
      >
        Novo Restaurante
      </Button>
    </Box>
  );
}

export default ShowRestaurants;
