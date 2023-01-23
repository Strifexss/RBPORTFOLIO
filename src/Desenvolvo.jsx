import styled from "styled-components"
import DesenvolvoComponents from "./components/DesenvolvoComponents"
import IconPc from "./imgs/Icons/DesignDigitalIcon.png"
import ApresentacaoIcon from "./imgs/Icons/PresentationIcon.png"
import DesenhistaBranco from "./imgs/Icons/DesenhistaBranco.png"
import IdentidadeVisual from "./imgs/Icons/Squares.png"


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
                font-size: 2rem;
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
    
    @media screen and (max-width: 1200px){
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
                    <DesenvolvoComponents nome="Artes Personalizadas" numero="1" imagem={IconPc} texto="É algo essencial, pois permite que o público ao olhar para a publicação, consiga perceber a sua identidade da marca através dos detalhes visuais que observa na publicação."/>
                    <DesenvolvoComponents nome="Posts Promocionais" numero="2" imagem={DesenhistaBranco} texto="Mantenha o seu público sempre informado, apresentando temas atrativos e diversificados de modo a manter o interesse por parte deles."/>
                    <DesenvolvoComponents nome="Identidade Visuais" numero="3" imagem={IdentidadeVisual} texto="Ter identidade visual, é algo fundamental na sua empresa/marca, de modo a que o público-alvo consiga identificar com clareza e eficácia a sua marca no meio de tantas outras."/>
                    <DesenvolvoComponents nome="Outros" numero="4" imagem={ApresentacaoIcon} texto="A RB Edição de imagens também oferece serviços de criação de Cardápio, figurinhas para whatsapp personalizadas, cartões de visita, flyers, folders, entre outros serviços."/>
             </Componentes>
            </section>
            <Esquerda>
                <h2>O que eu desenvolvo?</h2>
            </Esquerda>
        </Main>
    )
}