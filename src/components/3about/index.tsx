import { Container } from "./style";
import perfil from '../../assets/perfilrosto.jpeg';


export function About(){
    return(
        <Container>
            <img id="sobre" src={perfil} alt="" />
            <div>
            <h1>Sobre mim</h1>
                <p  className="">
                    Meu nome é José Neilson, estudante do ultimo período do curso de Analise e desenvolvimento de sistemas na faculdade,
                    busco oportunidade para aplicar os meus conhecimento e adquirir experiência nas áreas de desenvolvimento de software e web.
                    <br /><br />
                    Atualmente aplico o meu conhecimento em desenvolvimentos freelance, desenvolvendo aplicações web, com objetivo de facilitar os controles comerciais (serviços/vendas) de um determinado estabelecimento.
                    Desenvolvi front de CRM para sistemas de vendas e criação de landing pages
                </p>
            </div>
        </Container>
    );
}