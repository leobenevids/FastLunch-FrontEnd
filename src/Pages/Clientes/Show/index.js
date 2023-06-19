import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteClient, getClients } from "../../../util/apiHelper";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Title from "../../../Components/Layout/Title";
import ClientCard from "../../../Components/Cards/Client";

const ShowClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const response = await getClients();
      setClients(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <Box sx={{ width: "100%" }} mt={2}>
      <Title title={"Clientes"} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {clients && clients.length ? (
            clients.map((client) => (
              <Grid item xs={12} sm={6} md={4} key={client.id}>
                <ClientCard
                  nome={client.nome}
                  bairro={client.bairro}
                  rua={client.rua}
                  telefone={client.telefone}
                  foto={client?.foto}
                  id={client.id}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5">Sem clientes cadastrados nesse restaurante</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ShowClients;
