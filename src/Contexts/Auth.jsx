import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../util/apiHelper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("usuario");
    if (recoveredUser) {
      setUsuario(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const { user } = await authenticate(username, password);
      const loggedUser = {
        id: user._id,
        nome: user.nome,
        perfil: user.perfil,
        logo: user.logo,
      };
      setUsuario(loggedUser)
      localStorage.setItem("usuario", JSON.stringify(loggedUser));
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ autenticado: !!usuario, usuario, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
