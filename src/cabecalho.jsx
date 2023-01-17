import styled from "styled-components"

const Main = styled.div`
    position: fixed;
    width: 100%;
    height: 3.5rem;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #67159C;
`
export default function cabecalho() {
    return(
        <Main>
            <h1>Teste</h1>
        </Main>
    )
}