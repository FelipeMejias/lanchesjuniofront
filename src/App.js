import { useEffect, useState } from "react"
import styled from "styled-components"
import { getCardapio, postPedido } from "./api"
import PageBuscar from "./PageBuscar"
import PageAdicionar from "./PageAdicionar"
import PageDeletar from "./PageDeletar"
import PageAlterar from "./PageAlterar"

export default function App(){
    const [page,setPage]=useState(0)
    return(
        <Tela>
            {page==0?
                <PageMenu>
                    <Botao onClick={()=>setPage(1)}>Buscar itens</Botao>
                    <Botao onClick={()=>setPage(2)}>Adicionar item</Botao>
                    <Botao onClick={()=>setPage(3)}>Alterar item</Botao>
                    <Botao onClick={()=>setPage(4)}>Deletar item</Botao>
                </PageMenu>
            :page==1?
                <PageBuscar setPage={setPage}/>
            :page==2?
                <PageAdicionar setPage={setPage}/>
            :page==3?
                <PageAlterar setPage={setPage}/>
            :page==4?
                <PageDeletar setPage={setPage}/>
            :<></>
            }
        </Tela>
    )
}
const Botao=styled.div`
cursor:pointer;
border-radius:10px;
align-items:center;justify-content:center;
height:20%;width:100%;background:lightblue;
`
const PageMenu=styled.div`
flex-direction:column;
justify-content:space-between;
height:400px;width:90%;max-width:400px;
`
const Tela=styled.div`
font-family: "Roboto", sans-serif;
align-items:center;justify-content:center;
width:100vw;height:100vh;
background:#a0a0db;

`