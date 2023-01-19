import styled from "styled-components"
import ArtesComponents from "./components/ArtesComponents"


const Main = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
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

    @media screen and (max-width: 900px) {
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
        color:#841dc9;
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
                <ArtesComponents/>
                <ArtesComponents/>
                <ArtesComponents/>
                <ArtesComponents/>
            </section>
            </div>
            <Esquerda>
                <h2>Artes</h2>
            </Esquerda>
        </Main>
    )
}