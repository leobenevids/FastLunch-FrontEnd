import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteClient, getClients } from "../../../util/apiHelper";
import { Box, Container, Grid } from "@mui/material";
import Title from "../../../Components/Title/Title";
import ClientCard from "../../../Components/Cards/ClientCard/ClientCard";

const MostrarClientes = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    const response = await getClients();
    setClients(response);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (localStorage.getItem("usuario")) {
    var Id = JSON.parse(localStorage.getItem("usuario")).IdCliente;
  }

  const deleteThisClient = async (client_id) => {
    await deleteClient(client_id);
    navigate(0);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        padding: "1rem",
      }}
    >
      <Title title={"Clientes"} />
      <Box mt={2}>
        <Grid container spacing={2}>
          {clients.length ? (
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
              <Box>Sem clientes cadastrados</Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default MostrarClientes
