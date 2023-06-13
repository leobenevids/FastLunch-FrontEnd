import { useState } from "react";
import "./CadastroProduto.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [descricaoReduzida, setDescricaoReduzida] = useState("");
  const [secao, setSecao] = useState("");

  return (
    <>
      <div className="container-cadastroproduto">
        <h1>Cadastro de produtos</h1>

        <div className="principal-cadastroproduto">
          <input
            type="text"
            value={nome}
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            value={descricao}
            placeholder="Descrição"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            value={descricaoReduzida}
            placeholder="Descrição reduzida"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            value={secao}
            placeholder="Seção"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default CadastroProduto;
