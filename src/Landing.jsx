import styled from 'styled-components'
import LogoNany from './imgs/LogoNanyPng.png'
import {Fade} from "react-reveal"
import InstagramIcon from ".//imgs/Icons/InstagramIcon2.png"
import GmailIcon from ".//imgs/Icons/GmailIcon2.png"
import Blackground from "./imgs/Blackground.jpg"

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 85% 15%;
    scroll-snap-align: center;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const Principal = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    img {
        width: 50rem;
        height: 40rem;
        transform: translateY(-5rem);

        @media screen and (max-width: 900px) {
            width: 25rem;
            height: 20rem;
            transform: translateY(-3rem);
        }

        @media screen and (min-width: 900px) and (max-width: 1550px) {
            width: 40rem;
            height: 35rem;
            transform: translateY(-3rem);
        }
    }
        
    

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
        font-size: 4rem;
        text-align: center;
        text-align: left;
        margin-left:7rem;
        margin-top: 4rem;
        @media screen and (max-width: 900px) {
       font-size: 2.5rem;
       text-align: center;
       margin-left: 0;
       margin-top: 8rem;
    }

        span {
            color: #fff;
        }
    }

    button {
        width: 8rem;
        height: 3.5rem;
        margin-top: 2rem;
        border: none;
        background-color: transparent;
        border: 4px solid #fff;
        color: #fff;
        cursor: pointer;
        transform: scale(90%);
        font-weight: bold;
        :hover {
            transform: scale(100%);
        }
    }

       p {
        text-align: left;
        margin-left: 7rem;
        font-weight: bold; 
        

        @media screen and (max-width: 900px) {
           text-align: center;
           margin-left: 0;
            padding: 1%;
        }
    }
    }

`

const Esquerda = styled.div`
    background-color: #FCFCFC;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;

    @media screen and (max-width: 1200px) {
        visibility: hidden;
    }

    h2 {
        transform: rotate(90deg);
        font-size: 2.5rem;
        white-space: nowrap;
}
`

const Icones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
        margin-top: 0rem;

    }
    img {
        width: 3.8rem;
        height: 3.8rem;
        margin-left: 1rem;
        margin-right: 1rem;
        transform: scale(90%);
        :hover {
            transform: scale(100%);
        }
    }

    @media screen and (max-width: 900px) {
        margin: 1rem;

    }
`


export default function Landing() {
    return(
        <Main id='Home' style={{ 
            backgroundImage: `url(${Blackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "contrast(1.1)"
          }}>
            <Principal>
                <Fade top>
                    <section>
                        <h1>Designer Gráfico para mídias sociais</h1>
                        <p>O design é um grande aliado das redes sociais, permitindo dar respostas criativas, criando a identidade visual de uma empresa/marca e, transmitindo sempre informações claras, objetivas e concisas, que possibilitem prender a atenção do cliente.</p>
                        <article>
                            <a href="#Desenvolvo"><button>Explorar Agora</button></a>
                        </article>
                        <Icones>
                            <a href="https://www.instagram.com/rrbb_edit/"><img src={InstagramIcon} alt="Instagram" /></a>
                            <img src={GmailIcon} alt="Gmail" />
                        </Icones>
                    </section>
                </Fade>              
               <Fade bottom>
                    <section>
                        <img src={LogoNany} alt="RbLogo" />
                    </section>
                    
               </Fade> 
            </Principal>
            <Esquerda>
                <h2>Designer Portfolio</h2>              
                </Esquerda>
        </Main>
    )
}