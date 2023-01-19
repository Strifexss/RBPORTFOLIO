import styled from "styled-components"

const Main = styled.div`
    width: 100%;
    height: 3.5rem;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    position: fixed;
    opacity: 0.3;
    transition: 0.1s;
    margin-bottom: 5rem;

    @media screen and (max-width: 900px){
        display: none;
    }

    :hover {
        opacity: 1;
    }
    p {
        margin-left: 1rem;
        margin-right: 1rem;
        :hover {
            color: #8f8f8f;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        width: 6rem;
        height: 6rem;
        cursor: pointer;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            margin: 1rem;
            border: solid 1px #fff;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10rem;
            height: 2rem;
        }
    }
`
export default function cabecalho() {
    return(
        <Main>
            <section>
            <a href="#Home"><p>Inicio</p></a>
            <a href="#Sobre"><p>Sobre mim</p></a>
            <a href="#Desenvolvo"><p>Desenvolvo</p></a>
            <a href="#Artes"><p>Artes</p></a>
            </section>
        </Main>
    )
}