import { useEffect, useState } from "react"
import styled from "styled-components"
import { getProdutos, postProduto, putProduto } from "./api"

export default function PageAlterar({setPage}){
    const [id,setId]=useState('')
    const [nome,setNome]=useState('')
    const [preco,setPreco]=useState('')
    const [erro,setErro]=useState('')
    const [acerto,setAcerto]=useState('')
    function alterarProduto(){
        const objeto={}
        if(nome)objeto.nome=nome
        if(preco)objeto.preco=preco
        const promise=putProduto(id,objeto)
        promise.then(res=>{
            setAcerto('Produto alterado')
            setTimeout(() => {setAcerto('')}, 3*1000);
            setId('')
            setNome('')
            setPreco('')
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
                <input 
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}
                    placeholder="Nome..."
                />
                <input 
                    value={preco}
                    onChange={(e)=>setPreco(e.target.value)}
                    placeholder="Preço..."
                />
                <Back onClick={alterarProduto}>Alterar</Back>
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