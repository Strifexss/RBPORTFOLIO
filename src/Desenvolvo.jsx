import styled from "styled-components"
import DesenvolvoComponents from "./components/DesenvolvoComponents"
import IconPc from "./imgs/Icons/DesignerPcIcon.png"
import DesignerIcon from "./imgs/Icons/DesignerIcon.png"
import IdentidadeVisualIcon from "./imgs/Icons/IdentidadeVisual.png"
import ApresentacaoIcon from "./imgs/Icons/ApresentacaoIcon.png"
import { Fade } from "react-reveal"
const Main = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 85% 15%;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
            color: #841dc9;
            font-size: 3rem;
        }
    }

`

const Componentes = styled.div`
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
      padding: 3rem;
    
`

const Esquerda = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center; 
    align-items: center;
        
   
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
                <Fade top>
                <Componentes>
                    <DesenvolvoComponents nome="Design Digital" numero="1" imagem={IconPc}/>
                    <DesenvolvoComponents nome="Design Gráfico" numero="2" imagem={DesignerIcon}/>
                    <DesenvolvoComponents nome="Identidade Visuais" numero="3" imagem={IdentidadeVisualIcon}/>
                    <DesenvolvoComponents nome="Apresentações" numero="4" imagem={ApresentacaoIcon}/>
             </Componentes>
             </Fade>
            </section>
            <Esquerda>
                <h2>O que eu desenvolvo?</h2>
            </Esquerda>
        </Main>
    )
}