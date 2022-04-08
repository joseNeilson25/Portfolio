import { Container } from "./style";



export function Estu(){
    return(
        <Container>
           <h1 id="es">Estudos:</h1>
            <p  className="titulo">
                Curso da rocketseat 
            </p>
            <p  className="tempo">
                Dez.2021 - Atualmente
           </p>
           <p  className="tipo">
                Ead.
            </p>
            <p  className="detalhes">
                Na Rocketseat aprendo a construção de aplicações em Next.js, integrações de api e etc. <br /><br />
                Já no back end, temos aulas criações API e de sistemas completos em Node.js
            </p>
            <p  className="titulo">
                Análise e Desenvolvimento de Sistemas
            </p>
            <p  className="tempo">
                Fevereiro.2020 - Julho.2022
           </p>
           <p  className="tipo">
                Faculdade
            </p>
            <p  className="detalhes">
            A graduação me proporcionou várias experiêcias na área, criando uma network com profissionais que atuaantes no mercado, assim, fazendo com que eu tenha conseguido meus primeiros freelacer.
            </p>
        </Container>
    );
}