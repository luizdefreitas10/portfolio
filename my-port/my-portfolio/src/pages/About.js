import React from 'react';
import Header from '../components/Header';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
import './About.css';
import { Link } from 'react-router-dom';

function About () {
 return (
  <div className="div-father-article">
    <Header/>
    <article className="article-class">
      <p>Olá! Bem-vindo ao meu portfólio. Meu nome é Luiz de Freitas, sou natural de Recife, Pernambuco, Brasil. Sou desenvolvedor web front-end, atualmente em transição de carreira, e estou cursando Desenvolvimento Web pela <a href="https://www.betrybe.com/" style={{textDecoration: "none", color: "black"}} target="_blank" rel="noreferrer">Trybe</a>. No módulo de front-end, realizei projetos utilizando JavaScript, React, Redux, Context API com Hooks, e testes, com React Test Library, Jest e Node Js. Firmei conceitos sólidos em lógica de programação me sinto confortável em por em prática minhas habilidades, construindo aplicações que possam servir de ajuda e utilidade a quem precisa.</p>
      <p>Veja alguns dos meus <Link to="/projects" style={{textDecoration: "none", color: "black"}}>projetos</Link>.</p>
      <p>Atualmente, estou cursando o módulo de back-end, onde já pude estudar e firmar conceitos sobre Docker e SQL.</p>
    </article>
    <Footer/>
    <Clock/>
  </div>
 );
}

export default About;
