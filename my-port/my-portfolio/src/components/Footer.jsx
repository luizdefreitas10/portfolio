import React from 'react';
import './Footer.css';

import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

function Footer () {
  return (
      <div className="father-clas-2">
        <div className="border-div-class-2">
          <a href="https://www.linkedin.com/in/luiz-de-freitas-7973bb167/" target="_blank" rel="noreferrer">
            <BsLinkedin size={25} color="#FCA311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class-2">
          <a href="https://github.com/luizdefreitas10" target="_blank" rel="noreferrer">
            <BsGithub size={25} color="#FCA311" fontWeight="light"/>
          </a>
        </div>
        <div className="border-div-class-2">
          <a href="https://www.instagram.com/luizinho11/" target="_blank" rel="noreferrer">
            <BsInstagram size={25} color="#FCA311" fontWeight="light"/>
          </a>
        </div>
      </div>
  );
}

export default Footer;