import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import ProjectDetails from './ProjectDetails';
import { mockData } from '../utils/mockData';
import './Projects.css'

function Projects () {
  console.log(mockData);
  return (
    <div>
      <Header />
      <div className="father-div-projects">
        { mockData.map((project) => (
          <Link to={ `/projects/${project.id}` }>
            <div className="img-class-projects">
            <img src={project.src} alt={ `${project.name} application` }
            height="150px"
            width="150px"
          />
          </div>
          <h1>{ project.name }</h1>
          </Link>
        )) }
        {/* <a href="https://react-trivia-eta.vercel.app/" target="_blank" rel="noreferrer"> */}
        {/* <Link to="/projects/:id">
          <div className="img-class-projects">
            <img src="TriviaApp.png" alt="Trivia Login Page Img"
            height="150px"
            width="150px"
          />
          </div>
          <h1>Trivia Game</h1>
          </Link> */}
        {/* </a> */}
        {/* <a href="https://trybe-wallet-lac.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="trybewallet.png" alt="TrybeWallet Login Page Img"
            height="150px"
            width="150px"
            />
          </div>
          <h1>TrybeWallet</h1>
        </a>
        <a href="https://shopping-cart-projectjs.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="shoppingCart.png" alt="Shopping Cart App Img"
            height="150px"
            width="150px"
            />
          </div>
          <h1>Shopping Cart</h1>
        </a>
        <a href="https://solar-system-info.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="solar-system-react-app.png" alt="Solar System App Img"
            height="150px"
            width="150px"
            />
          </div>
          <h1>Solar System</h1>
        </a>
        <a href="https://pixels-art-cql3.vercel.app/" target="_blank" rel="noreferrer">
          <div className="img-class-projects">
            <img src="pixel-art.png" alt="Pixels Art App Img"
            height="150px"
            width="150px"
            />
          </div>
          <h1>Pixels Art</h1>
        </a> */}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
