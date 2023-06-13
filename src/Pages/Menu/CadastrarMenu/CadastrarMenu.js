import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getMenu, registerMenu } from "../../../util/apiHelper";
import Title from "../../../Components/Title/Title";

const CadastrarMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const validationSchema = Yup.object().shape({
    codigo: Yup.string().required("Código é obrigatório"),
    nomePrato: Yup.string().required("Nome do prato é obrigatório"),
    descricaoPrato: Yup.string().required("Descrição é obrigatória"),
    fotoPrato: Yup.string().required("Foto é obrigatória"),
    valorAtual: Yup.number()
      .typeError("Preço Atual deve ser um número")
      .required("Preço Atual é obrigatório"),
    valorOferta: Yup.number()
      .typeError("Preço Oferta deve ser um número")
      .required("Preço Oferta é obrigatório"),
    valorAnterior: Yup.number()
      .typeError("Preço Anterior deve ser um número")
      .required("Preço Anterior é obrigatório"),
    nomeRestaurante: Yup.string().required("Nome do Restaurante é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      codigo: "",
      nomePrato: "",
      descricaoPrato: "",
      fotoPrato: "",
      valorAtual: "",
      valorOferta: "",
      valorAnterior: "",
      nomeRestaurante: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerNewMenu(values);
    },
  });

  useEffect(async () => {
    if (id) {
      const response = await getMenu(id);
      console.log(response);
      setOrder(response);
    }
  }, [id]);

  const registerNewMenu = async (menu_values) => {
    await registerMenu(menu_values);
    navigate(0);
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    const floatValue = parseFloat(value.replace(/[^\d]/g, ""));
    return `${floatValue.toLocaleString("pt-BR")}`;
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatCurrency(value);
    formik.setFieldValue(name, formattedValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        height: "80vh",
        margin: "3rem auto",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Title title={"Cadastrar Cardápio"} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "30vh",
            justifyContent: "space-around",
          }}
          pl={1}
          pr={1}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Código"
              placeholder="000000-0"
              variant="standard"
              size="small"
              name="codigo"
              value={formik.values.codigo}
              onChange={formik.handleChange}
              error={formik.touched.codigo && Boolean(formik.errors.codigo)}
              helperText={formik.touched.codigo && formik.errors.codigo}
            />

            <TextField
              label="Foto do Prato"
              placeholder="Insira uma url de imagem"
              variant="standard"
              size="small"
              name="fotoPrato"
              value={formik.values.fotoPrato}
              onChange={formik.handleChange}
              error={
                formik.touched.fotoPrato && Boolean(formik.errors.fotoPrato)
              }
              helperText={formik.touched.fotoPrato && formik.errors.fotoPrato}
            />

            <TextField
              label="Nome do Prato"
              placeholder="Insira o nome do prato"
              variant="standard"
              size="small"
              name="nomePrato"
              value={formik.values.nomePrato}
              onChange={formik.handleChange}
              error={
                formik.touched.nomePrato && Boolean(formik.errors.nomePrato)
              }
              helperText={formik.touched.nomePrato && formik.errors.nomePrato}
            />
          </Box>

          <TextField
            label="Descrição do Prato"
            placeholder="Insira um descrição sobre o prato"
            variant="standard"
            name="descricaoPrato"
            value={formik.values.descricaoPrato}
            onChange={formik.handleChange}
            error={
              formik.touched.descricaoPrato &&
              Boolean(formik.errors.descricaoPrato)
            }
            helperText={
              formik.touched.descricaoPrato && formik.errors.descricaoPrato
            }
          />
        </Box>

        <Title title="Preço Atual" />
        <Box sx={{ height: "30vh", display: "flex", justifyContent: "space-between"}}>
          <TextField
            type="text"
            label="Restaurante"
            variant="standard"
            name="nomeRestaurante"
            value={formik.values.nomeRestaurante}
            onChange={formik.handleChange}
            error={
              formik.touched.nomeRestaurante &&
              Boolean(formik.errors.nomeRestaurante)
            }
            helperText={
              formik.touched.nomeRestaurante && formik.errors.nomeRestaurante
            }
          />
          <TextField
            type="text"
            label="Valor Atual"
            variant="standard"
            placeholder="R$ 0.00"
            name="valorAtual"
            value={formik.values.valorAtual}
            onChange={handleValueChange}
            error={
              formik.touched.valorAtual && Boolean(formik.errors.valorAtual)
            }
            helperText={formik.touched.valorAtual && formik.errors.valorAtual}
          />
          <TextField
            type="text"
            label="Valor de Oferta"
            variant="standard"
            placeholder="R$ 0.00"
            name="valorOferta"
            value={formik.values.valorOferta}
            onChange={handleValueChange}
            error={
              formik.touched.valorOferta && Boolean(formik.errors.valorOferta)
            }
            helperText={formik.touched.valorOferta && formik.errors.valorOferta}
          />
          <TextField
            type="text"
            label="Valor Anterior"
            variant="standard"
            placeholder="R$ 0.00"
            name="valorAnterior"
            value={formik.values.valorAnterior}
            onChange={handleValueChange}
            error={
              formik.touched.valorAnterior &&
              Boolean(formik.errors.valorAnterior)
            }
            helperText={
              formik.touched.valorAnterior && formik.errors.valorAnterior
            }
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }} mt={2}>
          <Button variant="contained" color="success" type="submit">
            Confirmar
          </Button>
          <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CadastrarMenu;
