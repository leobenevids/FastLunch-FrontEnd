import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerClient } from "../../../util/apiHelper";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Title from "../../../Components/Title/Title";
import { v4 as uuidv4 } from "uuid";

const CadastroClientes = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    cpf: Yup.number()
      .typeError("CPF deve ser um número")
      .required("CPF é obrigatório"),
    telefone: Yup.number()
      .typeError("Telefone deve ser um número")
      .required("Telefone é obrigatório"),
    cep: Yup.number()
      .typeError("CEP deve ser um número")
      .required("CEP é obrigatório"),
    rua: Yup.string().required("Nome da rua é obrigatório"),
    numero: Yup.string().required("Número é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      nome: "",
      cpf: "",
      telefone: "",
      cep: "",
      bairro: "",
      rua: "",
      numero: "",
      foto: "",
    },
    validationSchema,
    onSubmit: (values) => {
      saveClient(values);
    },
  });

  const saveClient = async (client_values) => {
    await registerClient(client_values);
    navigate(0);
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
      <Title title={"Cadastrar cliente"} />
      <Card sx={{ width: "100%", padding: "1rem" }}>
        <Grid container spacing={2} justifyContent="space-around" p={2} mt={2}>
          <Grid container direction="column" spacing={2} item xs={4} p={2}>
            <Typography variant="h6">Dados Pessoais</Typography>
            <TextField
              label="Nome do cliente"
              placeholder="Insira um nome"
              variant="standard"
              size="small"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
            />
            <TextField
              label="Foto de perfil"
              placeholder="Insira uma url"
              variant="standard"
              size="small"
              name="foto"
              value={formik.values.foto}
              onChange={formik.handleChange}
            />
            <TextField
              label="CPF"
              variant="standard"
              placeholder="000.000.000-00"
              size="small"
              name="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              error={formik.touched.cpf && Boolean(formik.errors.cpf)}
              helperText={formik.touched.cpf && formik.errors.cpf}
            />
            <TextField
              label="Telefone"
              variant="standard"
              placeholder="(00) 0 0000-0000"
              size="small"
              name="telefone"
              value={formik.values.telefone}
              onChange={formik.handleChange}
              error={formik.touched.telefone && Boolean(formik.errors.telefone)}
              helperText={formik.touched.telefone && formik.errors.telefone}
            />
          </Grid>
          <Grid container direction="column" spacing={2} item xs={4} p={2}>
            <Typography variant="h6">Dados do Endereço</Typography>
            <TextField
              label="CEP"
              variant="standard"
              placeholder="00000-000"
              size="small"
              name="cep"
              value={formik.values.cep}
              onChange={formik.handleChange}
              error={formik.touched.cep && Boolean(formik.errors.cep)}
              helperText={formik.touched.cep && formik.errors.cep}
            />
            <TextField
              label="Bairro"
              variant="standard"
              placeholder="Insira o nome do bairro"
              size="small"
              name="bairro"
              value={formik.values.bairro}
              onChange={formik.handleChange}
              error={formik.touched.bairro && Boolean(formik.errors.bairro)}
              helperText={formik.touched.bairro && formik.errors.bairro}
            />
            <TextField
              label="Rua"
              variant="standard"
              placeholder="Insira o nome da rua"
              size="small"
              name="rua"
              value={formik.values.rua}
              onChange={formik.handleChange}
              error={formik.touched.rua && Boolean(formik.errors.rua)}
              helperText={formik.touched.rua && formik.errors.rua}
            />
            <TextField
              label="Número"
              variant="standard"
              placeholder="Insira o número"
              size="small"
              name="numero"
              value={formik.values.numero}
              onChange={formik.handleChange}
              error={formik.touched.numero && Boolean(formik.errors.numero)}
              helperText={formik.touched.numero && formik.errors.numero}
            />
          </Grid>
        </Grid>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "90%" }}
          mt={2}
        >
          <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit" sx={{ marginLeft: "1rem" }}>
            Confirmar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default CadastroClientes;
