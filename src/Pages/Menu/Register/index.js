import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Card, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerMenu } from "../../../util/apiHelper";
import Title from "../../../Components/Layout/Title";

const RegisterMenu = () => {
  const navigate = useNavigate();
  const restaurantId = JSON.parse(localStorage.getItem("usuario")).id;

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome do prato é obrigatório"),
    descricao: Yup.string().required("Descrição é obrigatória"),
    foto: Yup.string().required("Foto é obrigatória"),
    valor_atual: Yup.number()
      .typeError("Preço Atual deve ser um número")
      .required("Preço Atual é obrigatório"),
    valor_oferta: Yup.number()
      .typeError("Preço Oferta deve ser um número")
      .required("Preço Oferta é obrigatório"),
    valor_anterior: Yup.number()
      .typeError("Preço Anterior deve ser um número")
      .required("Preço Anterior é obrigatório"),
    categoria: Yup.string().required("Categoria é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
      foto: "",
      valor_atual: "",
      valor_oferta: 0,
      valor_anterior: 0,
      usuario_id: restaurantId,
      status: true,
      categoria: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerNewMenu(values);
    },
  });

  const registerNewMenu = async (menu_values) => {
    await registerMenu(menu_values);
    navigate("/menus");
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: "100%",
      }}
    >
      <Title title={"Cadastrar Cardápio"} />
      <Card
        style={{
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Nome do Prato"
              placeholder="Insira o nome do prato"
              variant="standard"
              size="small"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
            />
            <TextField
              label="Foto do Prato"
              placeholder="Insira uma url de imagem"
              variant="standard"
              size="small"
              name="foto"
              value={formik.values.foto}
              onChange={formik.handleChange}
              error={formik.touched.foto && Boolean(formik.errors.foto)}
              helperText={formik.touched.foto && formik.errors.foto}
            />
          </Box>
        </Box>
        <TextField
          label="Descrição do Prato"
          placeholder="Insira um descrição sobre o prato"
          variant="standard"
          name="descricao"
          value={formik.values.descricao}
          onChange={formik.handleChange}
          error={formik.touched.descricao && Boolean(formik.errors.descricao)}
          helperText={formik.touched.descricao && formik.errors.descricao}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Categoria"
            placeholder="Insira a categoria do prato"
            variant="standard"
            size="small"
            name="categoria"
            value={formik.values.categoria}
            onChange={formik.handleChange}
            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
            helperText={formik.touched.categoria && formik.errors.categoria}
          />
          <TextField
            type="text"
            label="Valor Atual"
            variant="standard"
            placeholder="R$ 0.00"
            name="valor_atual"
            value={formik.values.valor_atual}
            onChange={formik.handleChange}
            error={
              formik.touched.valor_atual && Boolean(formik.errors.valor_atual)
            }
            helperText={formik.touched.valor_atual && formik.errors.valor_atual}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={2}>
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

export default RegisterMenu;
