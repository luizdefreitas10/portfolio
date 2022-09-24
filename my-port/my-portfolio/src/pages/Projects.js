import React from 'react';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Projects.css'

function Projects () {
  return (
    <div>
      <Header />
      <div className="father-div-projects">
        <a href="https://react-trivia-eta.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="TriviaApp.png" alt="Trivia Login Page Img"
            height="150px"
            width="150px"
          />
          </div>
          <h1>Trivia Game App</h1>
        </a>
        <a href="https://trybe-wallet-lac.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="trybewallet.png" alt="TrybeWallet Login Page Img"
            height="150px"
            width="150px"
            />
          </div>
          <h1>TrybeWallet App</h1>
        </a>
      </div>
      <Footer />
      <Clock />
    </div>
  );
}

export default Projects;
