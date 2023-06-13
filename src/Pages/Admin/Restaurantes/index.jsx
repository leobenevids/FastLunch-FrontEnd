import { useNavigate } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
 function Restaurantes(){
    const navigate = useNavigate()
    const [listaRestaurantes,setListaRestaurantes] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3002/restaurante/').then((res)=>{
            setListaRestaurantes(res.data)
          })
    }, []);
    let ativos = 0
    return(
        <section className="right" style={{padding:"2%"}}>
            <section className="info-restaurante">
                <div className="box">
                    <h2>Restaurantes Cadastrados</h2>
                    <h4>{listaRestaurantes.length}</h4>
                </div>
                <div className="box">
                    <h2>Restaurantes Ativos</h2>
                    <h4>{ativos}</h4>
                </div>
            </section>
            <button className='novo-restaurante' onClick={()=>navigate('/admin/restaurants/create')}>Novo</button>
            <table className='table-restaurantes'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Restaurante</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaRestaurantes.map((e)=>{
                            let status 
                            if(e.status){
                                status = 'online'
                                ativos++
                            }else{
                                status = 'off'
                            }
                            return(
                                <tr>
                                    <td style={{width:'80px'}} onClick={()=>navigate('/Admin/restaurantes/editar/'+e._id)}><div className="icone-editar"></div></td>
                                    <td>{e.nome}</td>
                                    <td>{status}</td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
        </section>
    )
}

export default Restaurantes