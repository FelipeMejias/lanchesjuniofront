import { useEffect } from "react"
import styled from "styled-components"
import { postPedido } from "./api"

export default function App(){
    function ativar(){
        const promise=postPedido({comida:'hamburger'})
        promise.then(res=>{
            console.log('foi')
        })
        promise.catch(e=>{
            console.log('erro')
        })
    }
    useEffect(ativar,[])
    return(
        <Tela>

        </Tela>
    )
}
const Tela=styled.div`
width:100vw;height:100vh;
background:blue;

`