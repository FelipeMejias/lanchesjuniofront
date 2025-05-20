import { useEffect, useState } from "react"
import styled from "styled-components"
import { getProdutos } from "./api"

export default function PageBuscar({setPage}){
    const [lanches,setLanches]=useState([])
    const [erro,setErro]=useState('')
    function buscarProdutos(){
        const promise=getProdutos()
        promise.then(res=>{
            setLanches(res.data)
        })
        .catch(e=>{
            setErro(e.response.data||'Erro desconhecido')
            setTimeout(() => {setErro('')}, 3*1000);
        })
    }
    useEffect(buscarProdutos,[])
    return(
        <Tela>
            <Back onClick={()=>setPage(0)}>Voltar</Back>
            <Caixa>
                {lanches.map(prod=><Lanche>
                    <div>
                        <h2><span>{prod.id}</span></h2>
                        <h2>{prod.nome}</h2>
                    </div>
                    <p>{prod.preco}</p>
                </Lanche>)}
            </Caixa>
            <h6>{erro}</h6>
        </Tela>
    )
}

const Lanche=styled.div`
width:100%;height:50px;
background:white;
margin:0 0 10px 0;
border-radius:10px;
align-items:center;justify-content:space-between;
padding:0 10px 0 10px;
h2{
margin:0 10px 0 0;
span{color:blue}
}
p{
color:green;font-size:20px;
}
`
const Caixa=styled.div`
overflow:auto;
flex-direction:column;
height:70%;width:90%;max-width:400px;
`
const Tela=styled.div`
flex-direction:column;
width:100vw;height:100vh;
background:#a0a0db;
align-items:center;
`
const Back=styled.div`
margin:30px 0 70px 0;
cursor:pointer;
border-radius:10px;
align-items:center;justify-content:center;
height:40px;width:100px;background:lightblue;
`