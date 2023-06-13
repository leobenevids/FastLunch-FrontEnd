import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
function EditarRestaurante(){
    const { id } = useParams();
    const [restaurante,setRestaurante] = useState([])
    const [nomeRestaurante,setNomeRestaurante] = useState()
    const [usuarioAcesso,setUsuarioAcesso] = useState()
    const [CNPJ,setCNPJ] = useState()
    const [endereco,setEndereco] = useState()
    useEffect(()=>{
        axios.get('http://localhost:3002/restaurante/'+id).then((res)=>{
            setRestaurante(res.data)
            setNomeRestaurante(res.data.nome)
            setUsuarioAcesso(res.data.email)
            setCNPJ(res.data.cnpj)
            setEndereco(res.data.endereco)
          })
    }, []);

    function Atualizar(){
        console.log('atualizado')
    }
    return(

        
        <section className="right" style={{padding:"2%"}}>
        <div className="form-novo-restaurante">
            <p>Nome do restaurante</p>
            <input type="text" value={nomeRestaurante} onChange={(e)=>setNomeRestaurante(e.target.value)} placeholder='Nome do restaurante'/>
            <p>Usuario de acesso</p>
            <input type="text" value={usuarioAcesso}onChange={(e)=>setUsuarioAcesso(e.target.value)} placeholder='Usuário de acesso'/>
            <p>CNPJ</p>
            <input type="text" value={CNPJ}onChange={(e)=>setCNPJ(e.target.value)} placeholder='Usuário de acesso'/>
            <p>endereço</p>
            <input type="text" value={endereco}onChange={(e)=>setEndereco(e.target.value)} placeholder='Usuário de acesso'/>
            <button onClick={()=>Atualizar()}>Atualizar</button>
        </div>
    </section>
    )
}

export default EditarRestaurante