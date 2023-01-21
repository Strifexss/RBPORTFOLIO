import styled from "styled-components"

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: cente;
display: flex;
flex-direction: column;
justify-content: cener;
align-items: center;
width: 100%;
margin: 5rem;


@media screen and (max-width: 900px){
    margin: 2.5rem;
}

img {
    width: 7rem;
    height: 8rem;
}


article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 900px){
        align-items: center;
    }

}

h1 {
    font-size: 3rem;
    color: #fff;
    margin-right: 1rem;
}
    h2 {
        color: #fff;
        font-size: 1.8rem;
    }
`

const Textos = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem;
    @media screen and (max-width: 900px){
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    p {
        }
}

`

export default function DesenvolvoComponents(props) {
    return(
        <Main>
            <img src={props.imagem} alt="Icon" />
            <Textos>
                <h1>{props.numero}</h1>
                <article>
                 <h2>{props.nome}</h2>
                <p>{props.texto}</p>
                </article>
            </Textos>
        </Main>
    )
}