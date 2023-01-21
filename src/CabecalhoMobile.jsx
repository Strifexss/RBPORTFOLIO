import { useState } from "react"
import styled from "styled-components"
import WhiteBackground1 from "./imgs/WhiteBackground.webp"
import Menu from "./imgs/Icons/MenuIcon.png"
import {Fade} from "react-reveal"


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
        justify-content: space-around;
        align-items: center;

        img {
            width: 2.5rem;
            height: 2.5rem;
            background-color: black;
            border-radius: 30%;
            cursor: pointer;
        }

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
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
       

        img {
            width: 2.5rem;
            height: 2.5rem;
            margin-top: 50rem;
            background-color: black;
            border-radius: 30%;
            cursor: pointer;
        }

    a {
        text-decoration: none;
        color: inherit;
        border: solid 2px black;
        width: 10rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 1rem;
    }

    
}
`


export default function CabecalhoMobile() {

    const [abrir, setAbrir] = useState(false)

    return(
        <Main  style={{ 
            backgroundImage: `url(${WhiteBackground1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "contrast(1.1)"
          }}>
            <img src={Menu} alt="Menu"  onClick={() => {
                setAbrir(!abrir)
                console.log(abrir)
            }}/>
            {
                abrir == true && 
                <Modal  style={{ 
                    backgroundImage: `url(${WhiteBackground1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "contrast(1.1)"
                  }}>
                    <img src={Menu} alt="Menu" onClick={() => {setAbrir(!abrir)}} />
            <Fade bottom>
            <a href="#Home"><h2 onClick={() => setAbrir(false)}>Inicio</h2></a>
            <a href="#Desenvolvo"  onClick={() => setAbrir(false)}><h2>Desenvolvo</h2></a>
            <a href="#Artes"  onClick={() => setAbrir(false)}><h2>Artes</h2></a>
            <a href="#Contato"  onClick={() => setAbrir(false)}><h2>Contato</h2></a>
            </Fade>     
                </Modal>
            }
        </Main>
    )
}