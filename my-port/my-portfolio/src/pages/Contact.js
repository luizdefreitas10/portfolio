import React from 'react';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Contact.css';

function Contact () {
  return (
    <div>
      <Header />
      <div className="article-class-contact">
        <h1>Contact me:</h1>
        <p>Email: luizdefreitas10@gmail.com</p>  
        <p>Cell-phone number: +55 81 99782-5316</p>  
        <a href="https://github.com/luizdefreitas10" target="_blank" rel="noreferrer">https://github.com/luizdefreitas10</a>
        <a href="https://www.linkedin.com/in/luiz-de-freitas-7973bb167/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/luiz-de-freitas-7973bb167/</a>
      </div>
      {/* <form>

        <textarea></textarea>
      </form> */}
      <Footer/>
      <Clock/>
    </div>
  )
};

export default Contact;