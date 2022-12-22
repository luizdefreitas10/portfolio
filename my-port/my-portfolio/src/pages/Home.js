import React, { useContext } from 'react';
import './Home.css';
import { BsLinkedin, BsGithub, BsInstagram, BsPlayCircle } from 'react-icons/bs';
import MyContext from '../context/MyContext';
import { Link } from 'react-router-dom';

function Home() {
   const { name, setName } = useContext(MyContext);
  return (
    <main>
      <div className="center-div">
      { name ? (<div className="welcome-class">
        <h1>Bem-vindo, <span>{ `${name}` }</span> !</h1>
        </div>) : null }
        <div className="img-class">
          <img src="luiz-sameiro.JPG" alt="Imagem de Luiz"/>
        </div>
        <div className="h1-div-class">
          <h1>Luiz de Freitas</h1>
          <p>- Front-End Web Developer</p>
          <p>- Based in Recife, Brazil.</p>
        </div>
      <div className="input-button-div">
        <input
          type="text"
          placeholder="Insert your name and press play"
          onChange={({ target: { value } }) => setName(value)}
        />
        <Link to="/about">
          <BsPlayCircle size={25} color="#14213d" className="play-icon"/>
        </Link>
      </div>
      </div>
      <div className="father-class">
        <div className="border-div-class">
          <a href="https://www.linkedin.com/in/luiz-de-freitas-7973bb167/" target="_blank" rel="noreferrer">
            <BsLinkedin size={30} color="#fca311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class">
          <a href="https://github.com/luizdefreitas10" target="_blank" rel="noreferrer">
            <BsGithub size={30} color="#fca311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class">
          <a href="https://www.instagram.com/luizinho11/" target="_blank" rel="noreferrer">
            <BsInstagram size={30} color="#fca311" fontWeight="light"/>
          </a>
        </div>
      </div>
    </main>
  
  );
};

export default Home;
