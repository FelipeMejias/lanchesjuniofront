import { useEffect, useState } from "react"
import styled from "styled-components"
import { deleteProduto, getProdutos, postProduto } from "./api"

export default function PageDeletar({setPage}){
    const [id,setId]=useState('')
    const [erro,setErro]=useState('')
    const [acerto,setAcerto]=useState('')
    function deletarProduto(){
        const promise=deleteProduto(id)
        promise.then(res=>{
            setAcerto('Produto deletado')
            setTimeout(() => {setAcerto('')}, 3*1000);
        })
        .catch(e=>{
            setErro(e.response.data||'Erro desconhecido')
            setTimeout(() => {setErro('')}, 3*1000);
        })
    }
    return(
        <Tela>
            <Back onClick={()=>setPage(0)}>Voltar</Back>
            <Caixa>
                <input 
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    placeholder="Id..."
                />
                <Back onClick={deletarProduto}>Deletar</Back>
            </Caixa>
            <h6>{erro}</h6>
            <h6><span>{acerto}</span></h6>
        </Tela>
    )
}
const Caixa=styled.div`
align-items:center;
overflow:auto;
flex-direction:column;
height:300px;width:90%;max-width:400px;
input{
box-sizing:border-box;
width:100%;height:40px;
margin:0 0 10px 0;padding:0 0 0 10px;
border-radius:10px;border:0;
}
`
const Tela=styled.div`
flex-direction:column;
width:100vw;height:100vh;
background:#a0a0db;
align-items:center;
h6{
color:yellow;
span{color:green}
}
`
const Back=styled.div`
margin:30px 0 70px 0;
cursor:pointer;
border-radius:10px;
align-items:center;justify-content:center;
height:40px;width:100px;background:lightblue;
`