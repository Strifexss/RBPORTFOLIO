import styled from "styled-components"
import Logo from "./imgs/LogoNanyPng.png"
import Gmail from "./imgs/Icons/GmailBlack.png"
import Instagram from "./imgs/Icons/InstagramBlack.png"
import FundoBranco from "./imgs/FundoBranco.webp"

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;

    @media screen and (max-width: 900px) {
        height: 130vh;
        padding: 1rem;

        h2 {
            text-align: center;
        }
    }

    h1 {
        margin-top: 2rem;
        font-size: 3.5rem;

        @media screen and (max-width: 900px){
            text-align: center;
        }
    }

    h3 {
        margin: 1rem;

        @media screen and (max-width: 900px){
            text-align: center;
        }
    }

    p {
        text-align: center;
    }

    img {
        width: 27rem;
        height: 25rem;
        background-color: black;
        border-radius: 50%;

        @media screen and (max-width: 900px){
            width: 23rem;
            height: 23rem;
        }
    }
`

const Contato = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section {
        img {
            margin: 1rem;
            width: 4rem;
            height: 4rem;
            background-color: #fff;
        }
    }
    
`


export default function Sobre() {
    return(
        <Main id="Contato" style={{ 
            backgroundImage: `url(${FundoBranco})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>   
                <img src={Logo} alt="Logo" />
                <h1>OI, SOMOS A RB EDIT</h1>
                <h3>Designer Freelancer</h3>
                <p>Procurando soluções e novas ideias para o seu projeto? <br /> Pois bem, meu objetivo é entender o seu <br /> negócio e criar soluções criativas de <br /> alta qualidade que ajudem a consolidar o sucesso <br /> da sua empresa</p>
                <Contato>   
                    <h1>Gostou?</h1>
                    <h2>Então vamos fazer do seu projeto um sucesso.</h2>
                    <h2>Entre em Contato com a gente</h2>
                    <section>
                       <a href="https://www.instagram.com/rrbb_edit/"><img src={Instagram} alt="Instagram" /></a>
                        <img src={Gmail} alt="Gmail" />
                    </section>
                </Contato>
        </Main>
        
    )
}