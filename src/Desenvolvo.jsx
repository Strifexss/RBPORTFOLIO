import styled from "styled-components"
import DesenvolvoComponents from "./components/DesenvolvoComponents"
import IconPc from "./imgs/Icons/DesignerPcIcon.png"
import IdentidadeVisualIcon from "./imgs/Icons/IdentidadeVisual.png"
import ApresentacaoIcon from "./imgs/Icons/ApresentacaoIcon.png"
import DesenhistaBranco from "./imgs/Icons/DesenhistaBranco.png"


const Main = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 85% 15%;

    @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 30rem;
        height: 95vh;
    }

    h3 {
        color: #fff;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            color: #fff;
            font-size: 3rem;

            @media screen and (max-width: 900px){
                font-size: 1rem;
            }
        }
    }

`

const Componentes = styled.div`
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
      padding: 3rem;

      @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0rem;
    }
    
`

const Esquerda = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center; 
    align-items: center;
    
    @media screen and (max-width: 900px){
        visibility: hidden;
    }
   
    h2 {
        color: black;
        transform: rotate(90deg);
        font-size: 2.5rem;
        white-space: nowrap;
       
}
`

export default function Desenvolvo() {
    return(
        <Main id="Desenvolvo">
            <section>
                <h3>Desenvolvo</h3>
                <Componentes>
                    <DesenvolvoComponents nome="Design Digital" numero="1" imagem={IconPc}/>
                    <DesenvolvoComponents nome="Design Gráfico" numero="2" imagem={DesenhistaBranco}/>
                    <DesenvolvoComponents nome="Identidade Visuais" numero="3" imagem={IdentidadeVisualIcon}/>
                    <DesenvolvoComponents nome="Apresentações" numero="4" imagem={ApresentacaoIcon}/>
             </Componentes>
            </section>
            <Esquerda>
                <h2>O que eu desenvolvo?</h2>
            </Esquerda>
        </Main>
    )
}