import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getRestaurant, updateRestaurant } from "../../../util/apiHelper";

const EditRestaurant = ({
  openModal,
  setOpenModal,
  restaurantName,
  restaurantId,
}) => {
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
      perfil: "cliente",
    },
    validationSchema,
    onSubmit: (values) => {
      editRestaurant(values);
    },
  });

  const fetchRestaurant = async (rest_id) => {
    const response = await getRestaurant(rest_id);
    formik.setValues({
      nome: response.nome,
      cnpj: response.cnpj,
      email: response.email,
      endereco: response.endereco,
      media_entrega: response.media_entrega,
      senha: response.senha,
      logo: response.logo,
      banner: response.banner,
      categoria: response.categoria
    })
  };

  const editRestaurant = async (rest_values) => {
    await updateRestaurant(rest_values, restaurantId);
    navigate("/admin/restaurants");
  };

  useEffect(() => {
    fetchRestaurant(restaurantId);
  }, []);

  return (
    <Dialog open={openModal}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Editar {restaurantName}</DialogTitle>
        <DialogContent 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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
          {/* <TextField
            sx={{ mb: 1 }}
            label="Senha"
            variant="standard"
            placeholder="Insira a senha que será utilizada para logar"
            size="small"
            name="senha"
            value={formik.values.senha}
            onChange={formik.handleChange}
            error={formik.touched.senha && Boolean(formik.errors.senha)}
            helperText={formik.touched.senha && formik.errors.senha}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(!openModal)}>Cancelar</Button>
          <Button variant="outlined" type="submit">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditRestaurant;
