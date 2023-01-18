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


img {
    width: 7rem;
    height: 8rem;
}


article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

h1 {
    font-size: 3rem;
    color: #841dc9;
    margin-right: 1rem;
}
    h2 {
        color: #841dc9;
        font-size: 1.8rem;
    }
`

const Textos = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export default function DesenvolvoComponents(props) {
    return(
        <Main>
            <img src={props.imagem} alt="Icon" />
            <Textos>
                <h1>{props.numero}</h1>
                <article>
                 <h2>{props.nome}</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt ad velit unde <br /> ratione officia laboriosam dicta consequuntur placeat architecto</p>
                </article>
            </Textos>
        </Main>
    )
}