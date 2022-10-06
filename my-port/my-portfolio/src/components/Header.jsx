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
      { name ? <h1>Welcome, <span>{ name }</span></h1> : <h1>Welcome, <span>Guest</span></h1> }
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/about">
          About Me
        </Link>    
      </nav>
    </div>
  );
}

export default Header;