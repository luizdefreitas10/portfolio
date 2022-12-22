import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';
// import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mainImg from '../images/luiz-sameiro-copy.JPG'
import './Header.css';

function Header () {
  const { name } = useContext(MyContext);
  return (
    <div className="div-header-class">
      <div className="img-class-header">
        <img src={mainImg} alt="Imagem de Luiz" style={{ height: "100px", width: "100px", borderRadius: "5px" }}/>
      </div>
      { name ? <h1>Bem-vindo, <span>{ name }</span></h1> : <h1>Bem-vindo, <span>convidado(a)</span></h1> }
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/projects">
          Projetos
        </Link>
        <Link to="/about">
          Sobre mim
        </Link>
        <Link to="/contact">
          Contato
        </Link>
      </nav>
    </div>
  );
}

export default Header;