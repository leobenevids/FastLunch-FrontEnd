
import React, { useContext} from "react";
import './style.css'
import{Link} from "react-router-dom";
function CaixaGeral() {
  
  
  return (
    <div className="right">
        <div className="container">
            <header className="cx"><h4>Caixa Geral</h4></header>
            <section>
                <div className="periodo"> 
                    <h3>Período de Movimentação</h3>
                    <div className="box-data">
                        <span>Ínicio</span><div className=""></div>
                        <input type="date" name="" id="" />
                    </div>

                    <div className="box-data">
                        <span>Fim</span><div className=""></div>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="box-data" style={{textAlign:'center'}}>
                    <p style={{marginBottom:"15px"}}>Situação</p>
                    <input type="radio" id="age1" name="age" value="30"/>
                    <label for="age1">Fechado</label>
                    <input type="radio" id="age2" name="age" value="60"/>
                    <label for="age2">Pendente</label>  
                    <input type="radio" id="age3" name="age" value="100"/>
                    <label for="age3">Aberto</label>
                    </div>
                </div>
                <div className="clear"></div>


                <h4 style={{width:"100%",backgroundColor:"#D9D9D9",height:"82px",marginTop:"40px",lineHeight:"80px",paddingLeft:"20px",borderRadius:"5px"}}>Caixas</h4>
                <table>
                    <thead style={{backgroundColor:"#D1D1D1"}}>
                        <th>Movimentação</th>
                        <th></th>
                        <th>Cálculo</th>
                        <th>Declarado</th>
                        <th>Diferença</th>
                        <th>Situação</th>
                    </thead>
                    <tbody>
                    <tr>
                            <td>18/05/2022</td>
                            <td></td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Aberto</td>
                        </tr>
                        <tr>
                            <td>17/05/2022</td>
                            <td></td>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>Fechado</td>
                            </tr>
                        </tbody>
                </table>
            </section>
        </div>
    </div>
  );
}

export default CaixaGeral
