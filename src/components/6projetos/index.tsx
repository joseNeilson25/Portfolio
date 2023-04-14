import React from "react";
import { Container } from "./style";
import Rentalx from '../../assets/rentalx.png';
import pokedex from '../../assets/pokedex.png';
import ignews from '../../assets/ignews.png';
import dtmoney from '../../assets/dtmoney.png';
import julia from '../../assets/julia.png';
import acclanding from '../../assets/acclanding.png';
import gira from '../../assets/gira.png';
import ssaude from '../../assets/ssaude.jpeg';
import dashgo from '../../assets/dashgo.png';
import emkt from '../../assets/emkt.png';
import mycardinho from '../../assets/mycardinho.png';
import embreve from '../../assets/embreve.png';
import disc from '../../assets/testdisc.png'
import vocepolicia from '../../assets/vocenapolicia.png'
import cerbrum from '../../assets/cerbrum.png'

export function Projetos(){
    return(
        <Container>
          <hr />
                <h1 id="pro">Projetos: </h1>
                <p className="p1">Links diretamente para projetos ou repositorio do github:</p> 
            <div>
                <a target="_blank" href="https://github.com/gdpnei2002/RENTALX-ROCKETSEAT" rel="noreferrer"><img src={Rentalx} alt="" />
                <p>Rentalx <br /><br />
                Minha primeira aplicação em Node.js, consiste em um CRUD de carros com ambiente Docker.</p></a>
                <a target="_blank" href="https://pokedexreact-dun.vercel.app/" rel="noreferrer"><img src={pokedex} alt="" />
                <p>Pokedex<br /><br />
                Desafio proposto por Vinicius Pasquatonio do canal Pasquadev. Consiste em uma integração da PokeApi e as estilizações foram por conta própria.</p></a>
                <a target="_blank" href="https://dtmoney-five-zeta.vercel.app/" rel="noreferrer"><img src={dtmoney} alt="" />
                <p>DtMoney <br /><br />
                Minha primeira aplicação em React com styled components. Feita para seu controle financeiro.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/ignews" rel="noreferrer"><img src={ignews} alt="" />
                <p>Ig news<br /><br />
                Newslatter feita em Next.js, estilização SASS e com API´s como STRIPE para pagamentos, FAUNA para banco de dados, PRISMIC para notícias e login com conta do GitHub.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/dashgo" rel="noreferrer"><img src={dashgo} alt="" />
                <p>Dashgo<br /><br />
                Mais um projeto das aulas da Rocketseat. O dasgo é um sistema de cadastro de usuários, com páginas de autenticação com Next-aut, dashboard e cadastro de usuários. Sistema desenvolvido em Next.JS e estilizado com Chakra UI.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/crud-next-node" rel="noreferrer"><img src={mycardinho} alt="" />
                <p>My Cardinho <br /><br />
                My cardinho é um trabalho da faculdade, com o objetivo de encerrar nossas atividades. Atualmente é apenas um CRUD. Front-end feito em Next.js, consumindo uma API Node.js</p></a>
                <a target="_blank" href="https://portfolioneilson.netlify.app/" rel="noreferrer"><img src={ssaude} alt="" />
                <p>System Saúde<br /><br />
                Ajudei a desenvolver apenas o front-end do CRM (sistema de vendas) de uma empresa de assistencia médica referência em minha cidade (Caruaru-PE). Neste projeto aprendi muito sobre JavaScript, Bootstrap, API's, MVC, GIT, Laravel, Factory, Testes, Trello e SCRUM.</p></a>
                <a target="_blank" href="https://gira.com.br/#/" rel="noreferrer"><img src={gira} alt="" />
                <p>Gira <br /><br />
                Primeiro freelance, solicitado pelo projeto Gira do banco Santander, para promove-lo e detalha-lo. Feito em HTML e CSS com display GRID. Fiz em parceria com um amigo utilizando GIT para versionamento de código.</p></a>
                <a target="_blank" href="https://portfolioneilson.netlify.app/" rel="noreferrer"><img src={julia} alt="" />
                <p>Academia do rosto <br /><br />
                Freelance para um workshop de estética natural, infelizmente o evento acabou, sendo assim não é mais possível acessa-lo.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002" rel="noreferrer"><img src={emkt} alt="" />
                <p>E-mail Marketing <br /><br />
                Primeiro freelance solicitado pelo hospital A.C.Camargo consiste na realização de e-mails marketing para que os clientes do hospital sejam informados das últimas notícias, como por exemplo: cursos realizados pelo hospital, avisos e requerimentos.</p></a>
                <a target="_blank" href="https://www.especializadoemvida.org.br/" rel="noreferrer"><img src={acclanding} alt="" />
                <p>A.C.Camargo <br /><br />
                Freelance de landing page solicitado pelo hospital A.C.Camargo feita em React.JS com intenção de promover detalhes sobre o tratamento de câncer.</p></a>
                <a target="_blank" href="https://psicodaniiconsultoriaonline.com/" rel="noreferrer"><img src={disc} alt="" />
                <p>Teste de perfil DISC<br /><br />
                O link irá para a página de psicodanii, onde o teste estará dentro da página e o resultado pode ser consultado diretamente com a mesma. O formulario foi feito em React.JS utilizando 2 bibliotecas.</p></a>
                <a target="_blank" href="http://cerbrum.com/" rel="noreferrer"><img src={cerbrum} alt="" />
                <p>Cerbrum<br /><br />
                Na maior empresa no seguimento de educação na região da minha cidade tem apenas um projeo de mesmo nome, ele consiste em gerenciar toda uma instituição de ensino, seja escola ou faculdade. No Cerbrum trabalhei em um sistema usando principalmente o .Net e JavaScript.</p></a>
                <a target="_blank" href="https://www.vocenapolicia.com.br/" rel="noreferrer"><img src={vocepolicia} alt="" />
                <p>Você na polícia<br /><br />
                É uma landing page com intenção em fazer a divulgação de um curso voltado para concursos públicos para políciamilitar da hotmart. Projeto desenvolvido em Html, CSS e JavaScript.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002" rel="noreferrer"><img src={embreve} alt="" />
                <p>Em breve<br /><br />
                Sempre trabalhando em novos projetos ... <br />Aprendendo atualmente: Next, Node e Angular</p></a>
           </div>
           <hr />
        </Container>
    );
}