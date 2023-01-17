import styled from 'styled-components'
import RBlogo from './imgs/RBLogo.png'
import {Fade} from "react-reveal"
import InstagramIcon from ".//imgs/Icons/InstagramIcon.png"
import GmailIcon from ".//imgs/Icons/GmailIcon.png"
import WhatsappIcon from ".//imgs/Icons/WhatsappIcon.png"
const Main = styled.div`
    width: 100%;
    height: 95vh;
    display: grid;
    grid-template-columns: 85% 15%;
`

const Principal = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    background: rgb(2,2,2);
    background: linear-gradient(25deg, rgba(2,2,2,1) 0%, rgba(29,29,29,1) 52%, rgba(47,47,47,1) 77%, rgba(70,70,70,1) 93%, rgba(100,100,100,1) 100%);
 
    img {
        width: 50rem;
        height: 50rem;
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

        span {
            color: #67159C;
        }
    }

    button {
        width: 8rem;
        height: 3.5rem;
        margin-top: 2rem;
        border: none;
        border-radius: 1rem;
        background-color: #67159C;
        color: #fff;
        cursor: pointer;
        transform: scale(90%);

        :hover {
            transform: scale(100%);
        }
    }

       p {
        text-align: left;
        margin-left: 7rem;
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
`

export default function Landing() {
    return(
        <Main>
            <Principal>
                <Fade top>
                    <section>
                        <h1>Good Designer is Noticeable & Great Design is <span>Invisible.</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam autem tempora? Eos voluptas recusandae quod doloremque nobis repudiandae harum, eius, laudantium id laboriosam animi, libero quia doloribus autem perspiciatis.</p>
                        <article>
                            <button>Explorar Agora</button>
                        </article>
                        <Icones>
                            <a href="https://www.instagram.com/rrbb_edit/"><img src={InstagramIcon} alt="Instagram" /></a>
                            <img src={GmailIcon} alt="Gmail" />
                            <img src={WhatsappIcon} alt="Whatsapp" />
                        </Icones>
                    </section>
                </Fade>              
               <Fade bottom>
                    <section>
                        <img src={RBlogo} alt="RbLogo" />
                    </section>
               </Fade> 
            </Principal>
            <Esquerda>
                <h2>Designer Portfolio</h2>
                </Esquerda>
        </Main>
    )
}