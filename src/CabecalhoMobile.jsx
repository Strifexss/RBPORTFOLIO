import { useState } from "react"
import styled from "styled-components"

const Main = styled.div`
display: none;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 3rem;
        background-color: #fff;
        position: fixed;
        color: black;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
}
`

const Modal = styled.div`
display: none;
    @media screen and (max-width: 900px) {
        width: 100%;
    height: 200vh;
    background-color: #fff;
    position: absolute;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 5rem;
    }
    }
    
`


export default function CabecalhoMobile() {

    const [abrir, setAbrir] = useState(false)

    return(
        <Main>
            <h1 onClick={() => {
                setAbrir(!abrir)
                console.log(abrir)
            }}>Teste</h1>
            {
                abrir == true && 
                <Modal>
                    <h1 onClick={() => {
                setAbrir(!abrir)
                console.log(abrir)
            }}>Teste</h1>
            <a href="#Home"><h2 onClick={() => setAbrir(false)}>Inicio</h2></a>
                </Modal>
            }
        </Main>
    )
}