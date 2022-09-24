import React, { useContext } from 'react';
import './Home.css';
import { BsLinkedin, BsGithub, BsInstagram, BsPlayCircle } from 'react-icons/bs';
import MyContext from '../context/MyContext';
import { Link } from 'react-router-dom';
// import Clock from '../components/Clock';

function Home() {
   const { name, setName } = useContext(MyContext);
  return (
    <main>
      <div className="center-div">
      { name ? (<div className="welcome-class">
        <h1>Welcome, <span>{ `${name}` }</span>!</h1>
        </div>) : null }
        <div className="img-class">
          <img src="https://scontent.frec34-1.fna.fbcdn.net/v/t1.6435-9/174162344_4342103665854838_1135862174194664204_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSLCoi7lfUrN3L1mVnyQ1gz_TxeAX6gjPP9PF4BfqCMyO0l30XJdJE4EU2p5nids6We3L7UfWUn37-VJ0M2yu7&_nc_ohc=7CqBF95ITjcAX--yrlT&_nc_ht=scontent.frec34-1.fna&oh=00_AT9EEtgKr6pb4CF4U8jKTktnE4V_E3KLiHa6Rr_qS2jtPA&oe=6337C285" alt="Imagem de Luiz"/>
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
            <BsLinkedin size={40} color="#fca311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class">
          <a href="https://github.com/luizdefreitas10" target="_blank" rel="noreferrer">
            <BsGithub size={40} color="#fca311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class">
          <a href="https://www.instagram.com/luizinho11/" target="_blank" rel="noreferrer">
            <BsInstagram size={40} color="#fca311" fontWeight="light"/>
          </a>
        </div>
      </div>
    </main>
  
  );
};

export default Home;
