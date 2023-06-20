import React, { useContext, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MenuLateral from "../Components/Layout/SideMenu";
import { AuthContext, AuthProvider } from "../Contexts/Auth";
import Home from "../Pages/Home";
import MostrarPedidos from "../Pages/Pedidos/Show";
import Login from "../Pages/Login";
import RegisterMenu from "../Pages/Menu/Register";
import FlashDeCaixa from "../Pages/FlashDeCaixa/Show";
import ShowMenus from "../Pages/Menu/Show";
import RegisterClient from "../Pages/Clientes/Register";
import ShowClients from "../Pages/Clientes/Show";
import CaixaGeral from "../Pages/CaixaGeral/Show";
import History from "../Pages/Historico/Show";
import Restaurantes from "../Pages/Admin/Restaurantes/Show";
import RegisterRestaurant from "../Pages/Admin/Restaurantes/Register";
import ReturnButton from "../Components/Layout/ReturnButton";
import ContentContainer from "../Components/Layout/Container";

const AppRoutes = () => {
  const { autenticado, usuario } = useContext(AuthContext);
  const location = useLocation();
  const shouldRenderMenuLateral = autenticado && location.pathname !== "/login";
  const navigate = useNavigate();
  const isAdmin = usuario && usuario.perfil === "admin";

  useEffect(() => {
    if (autenticado && location.pathname === "/") {
      isAdmin ? navigate("/admin/restaurants") : navigate("/home");
    }
  }, [autenticado, location.pathname, navigate]);

  const Private = ({ children }) => {
    if (!autenticado) {
      return <Navigate to="/" />;
    }
    return <ContentContainer>{children}</ContentContainer>;
  };

  const Permissao = ({ children, permissions }) => {
    const { usuario } = useContext(AuthContext);
    const userPermissions = usuario.perfil;
    if (
      permissions.some((permission) => {
        return userPermissions.includes(permission);
      })
    ) {
      return children;
    }
    return null;
  };

  return (
    <>
      {shouldRenderMenuLateral && (
        <>
          <MenuLateral />
          <ReturnButton />
        </>
      )}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <Home />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/orders"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <MostrarPedidos />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/menus/create"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <RegisterMenu />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/flashdecaixa"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <FlashDeCaixa />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/menus"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <ShowMenus />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/menus/:id"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <RegisterMenu />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/clients/create"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <RegisterClient />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/clients"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <ShowClients />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/caixageral"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <CaixaGeral />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/flashcaixa"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <FlashDeCaixa />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/history"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <History />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/orders"
            element={
              <Private>
                <Permissao permissions={["cliente"]}>
                  <MostrarPedidos />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/admin/restaurants"
            element={
              <Private>
                <Permissao permissions={["admin"]}>
                  <Restaurantes />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/admin/restaurants/create"
            element={
              <Private>
                <Permissao permissions={["admin"]}>
                  <RegisterRestaurant />
                </Permissao>
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default AppRoutes;
