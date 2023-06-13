import "./MenuLateral.css";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import { Link, useNavigate } from "react-router-dom";
import Permission from "../../Contexts/Permission";
import $ from "jquery";

export default function MenuLateral() {
  const navigate = useNavigate()

  if (localStorage.getItem("usuario")) {
    var Id = JSON.parse(localStorage.getItem("usuario"));
  }
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  $(".config").on("click", function () {
    $(".logout-on").toggle();
  });

  return (
    <div className="container-menu-lateral">
      <div className="menu-lateral">
        <div className="config"></div>
        <div className="logout-on">
          <div className="icone-perfil"></div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="foto-perfil">
          <img className="foto-perfil" src={"https://cdn-icons-png.flaticon.com/512/2206/2206368.png" || Id?.logo} />
        </div>
        <p style={{ color: "white", textAlign: "center" }}>{Id?.nome}</p>
        <nav>
          <ul>
            <Permission permissions={["admin"]}>
                <li onClick={() => navigate("/admin/restaurants")}>
                  <div className="icone-admin"></div>Admin
                </li>
            </Permission>
            <Permission permissions={["admin", "gestor", "cliente"]}>
              <li className="financeiro">
                <div className="icone-financeiro"></div>Financeiro
                <ul>
                  <div className="degrade"></div>
                  <li>
                    <h1>Financeiro</h1>
                  </li>
                    <li onClick={() => navigate("/clients")}>
                      <p>Clientes</p>
                    </li>
                  <li>
                    <p>Produtos</p>
                  </li>
                  <li>
                    <p>Painel de vendas</p>
                  </li>

                  <li>
                    <h1>Caixa</h1>
                  </li>
                    <li onClick={() => navigate("/caixageral")}>
                      <p>Caixa geral</p>
                    </li>
                    <li onClick={() => navigate("/flashcaixa")}>
                      <p>Flash de caixa</p>
                    </li>

                  <li>
                    <h1>Cadastro</h1>
                  </li>
                    <li onClick={() => navigate("/products/create")}>
                      <p>Cadastro de produtos</p>
                    </li>
                    <li onClick={() => navigate("/clients/create")}>
                      <p>Cadastro de clientes</p>
                    </li>
                </ul>
              </li>
              <li>
                <div className="icone-cardapio"></div>Cardápio
                <ul>
                  <div className="degrade"></div>
                  <li>
                    <h1>Cardápio</h1>
                  </li>
                    <li onClick={() => navigate("/menus")}>
                      <p>Mostrar cardápio</p>
                    </li>
                    <li onClick={() => navigate("/menus/create")}>
                      <p>Cadastrar cardápio</p>
                    </li>
                </ul>
              </li>
              <li>
                <div className="icone-estoque"></div>Estoque
              </li>
                <li onClick={() => navigate("/historico")}>
                  <div className="icone-historico"></div>Histórico
                </li>
                <li onClick={() => navigate("/orders")}>
                  <div className="icone-pedidos"></div>Pedidos
                </li>
            </Permission>
          </ul>
        </nav>
      </div>
    </div>
  );
}
