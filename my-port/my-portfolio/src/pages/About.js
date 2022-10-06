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
      <p>Hi! Welcome to my portfolio. My name is Luiz de Freitas, I'm from Recife, Pernambuco, Brazil. I'm a front-end web developer and I'm studying Web Development at <a href="https://www.betrybe.com/" style={{textDecoration: "none", color: "#fca311"}} target="_blank" rel="noreferrer">Trybe</a>. In the front-end module, I carried out projects using HTML, CSS, JavaScript, React, Redux, Context API with Hooks, and tests, with React Test Library, Jest and Node Js. I have solid concepts in programming logic and I feel comfortable putting my skills into practice, building applications that can be of help and utility to those who need it.</p>
      <p>Currently, I'm studying the back-end module, where I was able to study and establish concepts about Docker and SQL. I've learned to make queries using MySQL, looking for specific information in a database. When it comes to Docker, i've learned how to create images and how to use existing images in containers. I'm developing with NodeJs, creating APIs, and making request to it using methods like GET, POST, PUT, DELETE and PATCH, and giving back the response data so it can be manipulated. </p>
      <p>See some of my <Link to="/projects" style={{textDecoration: "none", color: "#fca311"}}>projects</Link>.</p>
    </article>
    {/* <section className="article-class">
      <h1>Contact me:</h1>
      <p>luizdefreitas10@gmail.com</p>  
      <p></p>  
      <p></p>  
    </section>   */}
    <Footer/>
    <Clock/>
  </div>
 );
}

export default About;
