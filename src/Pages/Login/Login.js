import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Paper, TextField } from "@mui/material";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../Components/Alert/Alert";

const Login = () => {
  const user = localStorage.getItem("usuario")
  const { login, autenticado } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    CPF: Yup.string().required("Usuário obrigatório"),
    senha: Yup.string().required("Senha obrigatória"),
  });

  const onSubmit = async (values) => {
    try {
      await login(values.CPF, values.senha);
  
    } catch (error) {
 
      console.log(error);
    }
  };



  const formik = useFormik({
    initialValues: {
      CPF: "",
      senha: "",
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#111821",
        '@media (min-width: 1200px)': {
          maxWidth: 'none !important',
        }
      }}
    >
      <Paper
        sx={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "250px", marginBottom: "2rem" }}
        />
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "250px",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Usuário"
            type="text"
            variant="outlined"
            size="small"
            name="CPF"
            placeholder="Usuário"
            value={formik.values.CPF}
            onChange={formik.handleChange}
            error={formik.touched.CPF && Boolean(formik.errors.CPF)}
            helperText={formik.touched.CPF && formik.errors.CPF}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            name="senha"
            placeholder="Senha"
            value={formik.values.senha}
            onChange={formik.handleChange}
            error={formik.touched.senha && Boolean(formik.errors.senha)}
            helperText={formik.touched.senha && formik.errors.senha}
          />
          <Button
            variant="contained"
            sx={{ background: "#111821"}}
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
