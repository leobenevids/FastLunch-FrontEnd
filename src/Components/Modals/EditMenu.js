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
import { getMenu, updateMenu } from "../../util/apiHelper";
import { useNavigate } from "react-router-dom";

const EditMenu = ({ openModal, setOpenModal, menuId }) => {
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();
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
      codigo: menu?.codigo,
      nomePrato: menu?.nome,
      descricaoPrato: menu?.descricao,
      fotoPrato: menu?.foto,
      valorAtual: menu?.valorAtual,
      valorOferta: "",
      valorAnterior: "",
      nomeRestaurante: "",
    },
    validationSchema,
    onSubmit: (values) => {
      editMenu(values);
    },
  });

  const editMenu = async (menu_values) => {
    await updateMenu(menu_values);
    navigate("/menus");
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    const floatValue = parseFloat(value.replace(/[^\d]/g, ""));
    return `${floatValue.toLocaleString("pt-BR")}`;
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    // const formattedValue = formatCurrency(value);
    formik.setFieldValue(name, value);
  };

  const fetchMenu = async (menu_id) => {
    const response = await getMenu(menu_id);
    setMenu(response)
  };

  useEffect(() => {
    fetchMenu(menuId);
  }, []);

  return (
    <Dialog open={openModal}>
      <form onSubmit={formik.handleSubmit} sx={{width : "100%", border: "1px solid red"}}>
        <DialogTitle>Editar Cardápio</DialogTitle>
        <DialogContent>
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
            error={formik.touched.fotoPrato && Boolean(formik.errors.fotoPrato)}
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
            error={formik.touched.nomePrato && Boolean(formik.errors.nomePrato)}
            helperText={formik.touched.nomePrato && formik.errors.nomePrato}
          />
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
          <TextField
            type="text"
            label="Restaurante"
            placeholder="Nome do restaurante"
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
