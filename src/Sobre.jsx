import styled from "styled-components"
import Giovanny from "./imgs/Giovanny.jpg"
const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 85% 15%;

    @media screen and (max-width: 900px) {
        display: none;
    }

    section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
`

const Esquerda = styled.div`
    background-color: #FCFCFC;
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
const Borda = styled.div`
    width: 80%;
    border-top: solid 4px #fff;
    border-radius: 1rem;
    display: grid;

    @media screen and (max-width: 900px) {
    }

    h1 {
        color: #fff;
    }
`

const Flexar = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    img {
        width: 25rem;
        height: 27rem;
        border-radius: 3.5rem;
    }

    span {
        color: #67159C;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 2rem;
        h1 {
            font-size: 3rem;
            font-weight: bold;
        }

        h2 {
            margin-top: 3rem;
        }
        p {
            color: #a1a0a0;
        }
    }
`

export default function Sobre() {
    return(
        <Main id="Sobre">
            <section>
                <Borda>
                    <Flexar>
                        <img src={Giovanny} alt="Pessoa" />
                        <article>
                            <h1><span>Giovanny Alvarino</span></h1>
                            <h2><span>Sobre mim:</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum dolorum dolor quasi doloremque officia perferendis natus. Culpa, ipsam accusantium minus cupiditate explicabo dolor ducimus. Ab quam ad alias asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint modi placeat perspiciatis quasi <br /> quam reiciendis veritatis necessitatibus <br /> doloribus labore dignissimos molestias est officiis ea mollitia a nisi, quia consequatur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum dolorum dolor quasi doloremque officia perferendis natus. Culpa, ipsam accusantium minus cupiditate explicabo dolor ducimus. Ab quam ad alias asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint modi placeat perspiciatis quasi <br /> quam reiciendis veritatis necessitatibus <br /> doloribus labore dignissimos molestias est officiis ea mollitia a nisi, quia consequatur.</p>
                        </article>
                    </Flexar>
                    <Flexar>
                        <article>
                            <h2><span>Experiências:</span></h2>
                            <ul>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa autem dolorum debitis aliquid neque qui accusantium incidunt culpa quas perspiciatis, facere optio fugit facilis illum officiis sit eos alias?</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa autem dolorum debitis aliquid neque qui accusantium incidunt culpa quas perspiciatis, facere optio fugit facilis illum officiis sit eos alias?</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa autem dolorum debitis aliquid neque qui accusantium incidunt culpa quas perspiciatis, facere optio fugit facilis illum officiis sit eos alias?</p></li>
                            </ul>
                        </article>    
                        <article>
                        <h2><span>Cursos:</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum dolorum dolor quasi doloremque officia perferendis natus. Culpa, ipsam accusantium minus cupiditate explicabo dolor ducimus. Ab quam ad alias asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint modi placeat perspiciatis quasi <br /> quam reiciendis veritatis necessitatibus <br /> doloribus labore dignissimos molestias est officiis ea mollitia a nisi, quia consequatur.</p>
                        </article>                        
                    </Flexar>
                </Borda>
            </section>
            <Esquerda>
                <h2>Sobre mim</h2>
            </Esquerda>
        </Main>
    )
}