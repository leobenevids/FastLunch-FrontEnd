import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getMenu, updateMenu } from "../../../util/apiHelper";
import { useNavigate } from "react-router-dom";

const EditMenu = ({ openModal, setOpenModal, menuId }) => {
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
      editMenu(values);
    },
  });

  const editMenu = async (menu_values) => {
    await updateMenu(menu_values, menuId);
    navigate("/menus");
  };

  const fetchMenu = async (menu_id) => {
    const response = await getMenu(menu_id);
    formik.setValues({
      nome: response.nome,
      descricao: response.descricao,
      foto: response.foto,
      valor_atual: response.valor_atual,
      valor_oferta: response.valor_oferta,
      valor_anterior: response.valor_anterior,
      usuario_id: restaurantId,
      status: response.status,
      categoria: response.categoria,
    });
  };

  useEffect(() => {
    fetchMenu(menuId);
  }, []);

  return (
    <Dialog open={openModal}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Editar Cardápio</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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

          <TextField
            sx={{ mb: 1 }}
            label="Descrição do Prato"
            placeholder="Insira um descrição sobre o prato"
            variant="standard"
            name="descricao"
            value={formik.values.descricao}
            onChange={formik.handleChange}
            error={formik.touched.descricao && Boolean(formik.errors.descricao)}
            helperText={formik.touched.descricao && formik.errors.descricao}
          />
          <TextField
            sx={{ mb: 1 }}
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
            sx={{ mb: 1 }}
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

export default EditMenu;
