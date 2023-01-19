import styled from 'styled-components'
import LogoNany from './imgs/LogoNanyPng.png'
import {Fade} from "react-reveal"
import InstagramIcon from ".//imgs/Icons/InstagramIcon.png"
import GmailIcon from ".//imgs/Icons/GmailIcon.png"
import WhatsappIcon from ".//imgs/Icons/WhatsappIcon.png"


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
    background: rgb(2,2,2);
    background: linear-gradient(25deg, rgba(2,2,2,1) 0%, rgba(29,29,29,1) 52%, rgba(47,47,47,1) 77%, rgba(70,70,70,1) 93%, rgba(100,100,100,1) 100%);
 
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
        border-radius: 1rem;
        background-color: #fff;
        color: black;
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

    @media screen and (max-width: 900px) {
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
        <Main id='Home'>
            <Principal>
                <Fade top>
                    <section>
                        <h1>Good Designer is Noticeable & Great Design is <span>Invisible.</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam autem tempora? Eos voluptas recusandae quod doloremque nobis repudiandae harum, eius, laudantium id laboriosam animi, libero quia doloribus autem perspiciatis.</p>
                        <article>
                            <a href="#Sobre"><button>Explorar Agora</button></a>
                        </article>
                        <Icones>
                            <a href="https://www.instagram.com/rrbb_edit/"><img src={InstagramIcon} alt="Instagram" /></a>
                            <a href="https://wa.me/558388281791"><img src={WhatsappIcon} alt="Whatsapp" /></a>
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