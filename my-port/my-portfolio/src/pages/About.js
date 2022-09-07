import React from 'react';
import Header from '../components/Header';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
import './About.css';

function About () {
 return (
  <div className="div-father-article">
    <Header/>
    <article className="article-class">
      <p>Olá! Bem-vindo ao meu portfólio. Meu nome é Luiz de Freitas, sou natural de Recife, Pernambuco, Brasil. Sou desenvolvedor front-end, atualmente em transição de carreira, e estou cursando Desenvolvimento Web pela <a href="https://www.betrybe.com/" style={{textDecoration: "none", color: "black"}}>Trybe</a>. No módulo de front-end, realizei projetos utilizando JavaScript, React, Redux, Context API com Hooks, e bastante testes, com React Test Library, Jest e Node Js. Firmei conceitos sólidos em lógica de programação me sinto confortável em por em prática minhas habilidades, construindo aplicações que possam servir de ajuda e utilidade a quem precisa.</p>
    </article>
    <Footer/>
    <Clock/>
  </div>
 );
}

export default About;
