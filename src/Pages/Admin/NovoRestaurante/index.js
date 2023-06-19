import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createRestaurant } from "../../../util/apiHelper";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Title from "../../../Components/Title/Title";

function NovoRestaurante() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome do Restaurante é obrigatório"),
    cnpj: Yup.string().required("CNPJ é obrigatório"),
    email: Yup.string().required("Email é obrigatório"),
    endereco: Yup.string().required("Endereço é obrigatório"),
    media_entrega: Yup.string().required("Média de Entrega é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      cnpj: "",
      email: "",
      endereco: "",
      media_entrega: "",
      status: true,
      categoria: "",
      senha: "",
      logo: "",
      banner: "",
      perfil: "cliente"
    },
    validationSchema,
    onSubmit: (values) => {
      saveRestaurant(values);
    },
  });

  const saveRestaurant = async (rest_values) => {
    await createRestaurant(rest_values);
    navigate("/admin/restaurants");
  };

  return (
    <Card
      sx={{
        width: "100%",
        padding: "1rem",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Title title={"Cadastrar Restaurante"} />
        <Box sx={{ display: "flex", flexDirection: "column" }} mt={2}>
          <Typography variant="h6">Dados do Restaurante</Typography>
          <TextField
            label="Nome do Restaurante"
            placeholder="Insira o nome do restaurante"
            variant="standard"
            size="small"
            name="nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
          <TextField
            label="CNPJ"
            variant="standard"
            placeholder="000.000.000/0000-00"
            size="small"
            name="cnpj"
            value={formik.values.cnpj}
            onChange={formik.handleChange}
            error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
            helperText={formik.touched.cnpj && formik.errors.cnpj}
          />
          <TextField
            label="Email"
            variant="standard"
            placeholder="Insira o email"
            size="small"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Endereço"
            variant="standard"
            placeholder="Insira o endereço"
            size="small"
            name="endereco"
            value={formik.values.endereco}
            onChange={formik.handleChange}
            error={formik.touched.endereco && Boolean(formik.errors.endereco)}
            helperText={formik.touched.endereco && formik.errors.endereco}
          />
           <TextField
            label="Logo"
            variant="standard"
            placeholder="Insira a logo do restaurante"
            size="small"
            name="logo"
            value={formik.values.logo}
            onChange={formik.handleChange}
            error={formik.touched.logo && Boolean(formik.errors.logo)}
            helperText={formik.touched.logo && formik.errors.logo}
          />
          <TextField
            label="Banner"
            variant="standard"
            placeholder="Insira o banner do restaurante"
            size="small"
            name="banner"
            value={formik.values.banner}
            onChange={formik.handleChange}
            error={formik.touched.banner && Boolean(formik.errors.banner)}
            helperText={formik.touched.banner && formik.errors.banner}
          />
          <TextField
            label="Média de Entrega"
            variant="standard"
            placeholder="Insira a média de entrega (em minutos)"
            size="small"
            name="media_entrega"
            value={formik.values.media_entrega}
            onChange={formik.handleChange}
            error={
              formik.touched.media_entrega &&
              Boolean(formik.errors.media_entrega)
            }
            helperText={
              formik.touched.media_entrega && formik.errors.media_entrega
            }
          />
          <TextField
            label="Categoria"
            variant="standard"
            placeholder="Insira a categoria do restaurante"
            size="small"
            name="categoria"
            value={formik.values.categoria}
            onChange={formik.handleChange}
            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
            helperText={formik.touched.categoria && formik.errors.categoria}
          />
          <TextField
            label="Senha"
            variant="standard"
            placeholder="Insira a senha que será utilizada para logar"
            size="small"
            name="senha"
            value={formik.values.senha}
            onChange={formik.handleChange}
            error={formik.touched.senha && Boolean(formik.errors.senha)}
            helperText={formik.touched.senha && formik.errors.senha}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={4}>
          <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit" sx={{ marginLeft: "1rem" }}>
            Confirmar
          </Button>
        </Box>
      </form>
    </Card>
  );
}

export default NovoRestaurante;
