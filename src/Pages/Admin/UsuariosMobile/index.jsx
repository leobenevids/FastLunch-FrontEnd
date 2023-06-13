import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function UsuariosMobile() {
  const navigate = useNavigate();
  const [usuariosMobile, setUsuariosMobile] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3002/authMobile/`).then(({ data }) => {
      setUsuariosMobile(data);
    });
  }, []);

  // console.log(usuariosMobile)
  const mostrarUsuariosMobile = usuariosMobile.map((e) => {
    return (
      <tr>
        <td style={{ width: "80px" }}>
          <div className="icone-editar"></div>
        </td>
        <td style={{ width: "80px" }}>
          <div className="icone-excluir"></div>
        </td>
        <td>{e.nome}</td>
        <td>{e.telefone}</td>
      </tr>
    );
  });
  return (
    <section className="right" style={{ padding: "2%" }}>
      <section className="info-restaurante">
        <div className="box">
          <h2>Usuarios Cadastrados</h2>
          <h4>{usuariosMobile.length}</h4>
        </div>
      </section>
      <button
        className="novo-restaurante"
        onClick={() => navigate("/Admin/novo")}
      >
        Novo
      </button>
      <table className="table-restaurantes">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Cliente</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>{mostrarUsuariosMobile}</tbody>
      </table>
    </section>
  );
}
