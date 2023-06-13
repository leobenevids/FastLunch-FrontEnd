
import React, {useState, useContext} from "react";
import './style.css'
import {AuthContext} from '../../Contexts/Auth'
import{
  Link, useNavigate, useParams
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
 function Historico() {
  const navigate = useNavigate();
  const [historicos, setHistoricos] = useState( []);
  const { id } = useParams();
  useEffect( ()=>{
      axios.get(`http://localhost:3001/historico/`+String(id)).then(({data}) =>{
          setHistoricos(data);
      })
  }, [] )
  if(localStorage.getItem('usuario')){
      var Id = JSON.parse(localStorage.getItem('usuario')).IdCliente
  }
  const historico = historicos.map((e)=>{
      return(
         e.historico.map((f)=>{
          return(
              <div className="card-comida">
                  <div className="imagem-prato"></div>
                  <p>Cliente: <span>{f.cliente}</span></p>
                  <p>Data do pedido:  <span>{f.dataPedido}</span></p>
                  <p>Status: <span>{f.status}</span></p>
              </div>
          )
         })
      )
  })
    return (
    <div className="right">
      <div className="container">
        <div className="titulo-historico"><h1>Histórico de pedidos</h1></div>
        <section className="mural">
           {historico}
        </section>
      </div>
    </div>
    );
  }

  export default Historico
  
  