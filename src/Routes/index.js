import React, { useContext, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MenuLateral from "../Components/MenuLateral/MenuLateral";
import { AuthContext, AuthProvider } from "../Contexts/Auth";
import Home from "../Pages/Home/Home";
import MostrarPedidos from "../Pages/Pedidos/MostrarPedidos/MostrarPedidos";
import Login from "../Pages/Login/Login";
import CadastrarMenu from "../Pages/Menu/CadastrarMenu/CadastrarMenu";
import FlashDeCaixa from "../Pages/FlashDeCaixa/FlashDeCaixa";
import MostrarMenu from "../Pages/Menu/MostrarMenu/MostrarMenu";
import CadastroClientes from "../Pages/Clientes/CadastroClientes/CadastroClientes";
import MostrarClientes from "../Pages/Clientes/MostrarClientes/MostrarClientes";
import CadastroProduto from "../Pages/CadastroProdutos/CadastroProduto";
import CaixaGeral from "../Pages/CaixaGeral";
import Historico from "../Pages/Historico";
import EditarPedidos from "../Pages/Pedidos/EditarPedidos";
import Restaurantes from "../Pages/Admin/Restaurantes";
import NovoRestaurante from "../Pages/Admin/NovoRestaurante";
import EditarRestaurante from "../Pages/Admin/EditarRestaurante";
import ReturnButton from "../Components/ReturnButton/ReturnButton";
import ContentContainer from "../Components/Layout/Container";

const AppRoutes = () => {
  const { autenticado } = useContext(AuthContext);
  const location = useLocation();
  const shouldRenderMenuLateral = autenticado && location.pathname !== "/login";
  const navigate = useNavigate();

  useEffect(() => {
    if (autenticado && location.pathname === "/") {
      navigate("/home");
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
          {/* Login */}
          <Route path="/" element={<Login />} />
          {/* Home */}
          <Route
            path="/home"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <Home />
                </Permissao>
              </Private>
            }
          />
          {/* Pedidos */}
          <Route
            path="/orders"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <MostrarPedidos />
                </Permissao>
              </Private>
            }
          />
          {/* Cadastrar menu */}
          <Route
            path="/menus/create"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <CadastrarMenu />
                  <ReturnButton />
                </Permissao>
              </Private>
            }
          />
          {/* Flash de caixa */}
          <Route
            path="/flashdecaixa"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <FlashDeCaixa />
                </Permissao>
              </Private>
            }
          />
          {/* Mostrar todos os cardápios */}
          <Route
            path="/menus"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <MostrarMenu />
                </Permissao>
              </Private>
            }
          />
          {/* Mostrar um cardápio */}
          <Route
            path="/menus/:id"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <MostrarMenu />
                </Permissao>
              </Private>
            }
          />
          {/* Cadastrar cliente */}
          <Route
            path="/clients/create"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <CadastroClientes />
                </Permissao>
              </Private>
            }
          />
          {/* Mostrar todos os clientes */}
          <Route
            path="/clients"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <MostrarClientes />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/products/create"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <CadastroProduto />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/caixageral"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <CaixaGeral />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/flashcaixa"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <FlashDeCaixa />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/historico"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <Historico />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/orders"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <MostrarPedidos />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/orders/:id"
            element={
              <Private>
                <Permissao permissions={["admin", "gestor", "cliente"]}>
                  <EditarPedidos />
                </Permissao>
              </Private>
            }
          />
          {/* <Route
            path="/admin/usuariosMobile"
            element={
              <Private>
                <Permissao permissions={["admin"]}>
                  <UsuariosMobile />
                </Permissao>
              </Private>
            }
          /> */}
          {/* <Route
            path="/admin/usuariosmobile/novo"
            element={
              <Private>
                <Permissao permissions={["admin"]}>
                  <NovoUsuariosMobile />
                </Permissao>
              </Private>
            }
          /> */}
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
                  <NovoRestaurante />
                </Permissao>
              </Private>
            }
          />
          <Route
            path="/admin/restaurants/:id"
            element={
              <Private>
                <Permissao permissions={["admin"]}>
                  <EditarRestaurante />
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
