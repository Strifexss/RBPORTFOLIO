import { useState } from "react"
import styled from "styled-components"


const Main = styled.div`
    width: 40rem;
    height: 30rem;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 1rem;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 5rem;
        margin: 8rem;
    }

    img {
        width: 20rem;
        height: 30rem;
        cursor: pointer;
        transition: 0.1s ;
        :hover {
            transform: scale(150%);
            @media screen and (max-width: 900px){
                transform: scale(100%);
                height: 30rem;
            }
            
        }
        @media screen and (max-width: 900px){
            width: 20rem;
            height: 23rem;
        }

    }

   
`

const TextosEsquerda = styled.div`
        width: 100%;
        height: 100%;
        background-color: #111111;
        display: grid;
        grid-template-rows: 20% 80%;
        
        @media screen and (max-width: 900px) {
            width: 20rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }


            h1 {
                color: #fff;
                font-size: 2rem;
                margin: 2rem;

                @media screen and (max-width: 900px) {
                    margin: 1rem;
                }
            }
            div {
                display: flex;
                justify-content: right;
                align-items: flex-end;

                @media screen and (max-width: 900px) {
                    justify-content: center;
                    align-items: center;

                }

                h1 {
                    color: #fff;
                    font-size: 2.5rem;
                    white-space: nowrap;

                    @media screen and (max-width: 900px) {
        }
                }
            }

`

export default function ArtesComponents(props) {

    const [aberto, setAberto] = useState(false)

    return(
        <Main>
            <div>
                <img onClick={() => {
                    setAberto(!aberto)
                    console.log(aberto)
                }} src={props.imagem} alt="Arte" />
            </div>
            <section>
                <TextosEsquerda>
                    <h1>{props.numero}</h1>
                    <div>
                        <h1>{props.nome}</h1>
                    </div>
                </TextosEsquerda>
            </section>
        </Main> 
    )
}