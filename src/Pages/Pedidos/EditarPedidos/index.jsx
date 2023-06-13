import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

 function EditarPedidos() {
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);
  const [statuss, setStatuss] = useState();

  const { id } = useParams();
  const { nome } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pedidos/` + String(id))
      .then(({ data }) => {
        setPedidos(data);
      });
  }, []);
  if (localStorage.getItem("usuario")) {
    var Id = JSON.parse(localStorage.getItem("usuario")).IdCliente;
  }
  const voltar = () => {
    navigate(`/pedidos/` + id);
  };
  var cliente = "";
  var dataPedidos = "";
  var endereco = "";
  var prato = "";
  var obs = "";

  const info = pedidos.map((pedido) => {
    var y = pedido.pedidos.find((g) => g.cliente == nome);
    cliente = y.cliente;
    dataPedidos = y.dataPedido;
    endereco = y.endereco;
    prato = y.prato;
    obs = y.observacao;
    return (
      <div className="informacoes-prato">
        <h2>Informações</h2>
        <p style={{ float: "left" }}>Cliente:</p>
        <span>{y.cliente}</span>
        <br />
        <p style={{ float: "left" }}>Data do Pedido:</p>
        <span>{y.dataPedido}</span>
        <br />
        <p style={{ float: "left" }}>Status:</p>
        <select
          name=""
          id=""
          value={statuss}
          onChange={(e) => {
            setStatuss(e.target.value);
          }}
        >
          <option value="Aberto">Aberto</option>
          <option value="Fechado">Fechado</option>
          <option value="Em andamento">Em andamento</option>
        </select>
        <br />
        <p style={{ float: "left" }}>Endereço:</p>
        <span>{y.endereco}</span>
      </div>
    );
  });

  const verificar = () => {
    if (statuss == "Em andamento") {
      axios
        .post("http://localhost:3001/pedidos/" + id + "/" + nome, {
          status: statuss,
        })
        .then((res) => {
          navigate("/pedidos/" + Id);
        });
    }
    if (statuss == "Fechado") {
    }
  };

  return (
    <div className="right">
      <div className="container">
        <div className="titulo-historico">
          <h1>Pedidos</h1>
        </div>
        <div className="part1-pedidos" style={{ marginTop: "50px" }}>
          <div
            className="foto-prato"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#ccc",
              float: "left",
              marginRight: "40px",
            }}
          ></div>
          {info}
        </div>
        <div className="clear"></div>
        <div
          className="part2-pedidos"
          style={{
            width: "100%",
            height: "200px",
            border: "1px solid black",
            marginTop: "50px",
            padding: "2%1",
          }}
        >
          {prato}
          <br />
          Observação:{obs}
        </div>
        <button onClick={voltar}>Voltar</button>
        <button onClick={verificar}>Salvar</button>
      </div>
    </div>
  );
}

export default EditarPedidos