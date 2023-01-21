import styled from "styled-components"
import ArtesComponents from "./components/ArtesComponents"
import Cardapio1 from "./imgs/Artes/Cardapio1.jpeg"
import Cartoes1 from "./imgs/Artes/CartaoDeVisita.jpeg"
import Cronograma1 from "./imgs/Artes/Cronograma1.jpeg"
import Figurinha2 from "./imgs/Artes/Figurinha2.jpeg"
import Banner2 from "./imgs/Artes/Banner2.jpeg"

const Main = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 85% 15%;    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-top: 25rem;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
}
`

const Esquerda = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1200px) {
        display: none;
    }

    h2 {
        color: black;
        transform: rotate(90deg);
        font-size: 2.5rem;
        white-space: nowrap;

        
    }
`

const Arte = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
    

    @media screen and (max-width: 900px) {
        margin: 1rem;
        p {
            display: none;
        }
    }

    h1 {
        color:#fff;
    }
`

export default function Artes() {
    return(
        <Main id="Artes">
            <div>
                <Arte>
                    <h1>Artes</h1>
                    <p>Passar o Mouse por cima das imagens para amplialas</p>
                </Arte>
            <section>
                <ArtesComponents numero = "1" imagem={Cardapio1} nome="Cardapios"/>
                <ArtesComponents numero = "2" imagem={Banner2} nome="Banners" />
                <ArtesComponents numero = "3" imagem={Cartoes1} nome="Cartões"/>
                <ArtesComponents numero = "4" imagem={Figurinha2} nome="Figurinhas" />
                <ArtesComponents numero = "5" imagem={Cronograma1} nome="Cronogramas"/>
            </section>
            </div>
            <Esquerda>
                <h2>Artes</h2>
            </Esquerda>
        </Main>
    )
}