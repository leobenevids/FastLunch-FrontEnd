import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import { Link } from "react-router-dom";
const FlashDeCaixa = () => {
  return (
    <div className="right">
      <div className="container">
        <header className="cx">
          <h4>Flash de Caixa</h4>
        </header>
        <section>
          <div className="periodo">
            <h3>Selecione o período</h3>
            <div className="box-data">
              <span>Ínicio</span>
              <div className=""></div>
              <input type="date" name="" id="" />
            </div>

            <div className="box-data">
              <span>Fim</span>
              <div className=""></div>
              <input type="date" name="" id="" />
            </div>
          </div>
          <div className="clear"></div>

          <h4
            style={{
              width: "100%",
              backgroundColor: "#D9D9D9",
              height: "82px",
              marginTop: "40px",
              lineHeight: "80px",
              paddingLeft: "20px",
              borderRadius: "5px",
            }}
          >
            Movimentações do dia
          </h4>
          <table>
            <thead style={{ backgroundColor: "#D1D1D1" }}>
              <th style={{ color: "red" }}>FORMA DE PAGAMENTO</th>
              <th style={{ color: "red" }}>CALCULADO</th>
              <th style={{ color: "red" }}>DECLARADO</th>
              <th style={{ color: "red" }}>DIFERENÇA</th>
            </thead>
            <tbody>
              <tr>
                <td>DINHEIRO</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>CARTÃO DE CREDITO</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>PIX</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default FlashDeCaixa