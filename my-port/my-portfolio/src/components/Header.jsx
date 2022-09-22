import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';
// import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

function Header () {
  const { name } = useContext(MyContext);
  return (
    <div className="div-header-class">
      <img src="https://scontent.frec34-1.fna.fbcdn.net/v/t1.6435-9/174162344_4342103665854838_1135862174194664204_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSLCoi7lfUrN3L1mVnyQ1gz_TxeAX6gjPP9PF4BfqCMyO0l30XJdJE4EU2p5nids6We3L7UfWUn37-VJ0M2yu7&_nc_ohc=7CqBF95ITjcAX--yrlT&_nc_ht=scontent.frec34-1.fna&oh=00_AT9EEtgKr6pb4CF4U8jKTktnE4V_E3KLiHa6Rr_qS2jtPA&oe=6337C285" alt="Imagem de Luiz" style={{ height: "100px", width: "100px", borderRadius: "5px" }}/>
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