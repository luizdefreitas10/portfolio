import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { mockData } from '../utils/mockData';
import './ProjectDetails.css';

function ProjectDetails () {
  const { id } = useParams();
  // const teste = mockData.find((project) => project.id === Number(id));
  // console.log(teste);
  return (
    <div>
      <Header />
      { [mockData.find((projectFinded) => projectFinded.id === Number(id))].map((project) => (
        <div key={project.id} className="article-class-2">
          <h1>{ project.name }</h1>
          <div className="article-class-img-div">
            <img src={ `${project.src}`} alt={`${project.name} - application`} style={{ height: '150px', width: '150px' }}/>
          </div>
          <p>{ project.resume }</p>
          <h2>Technologies used in the development of this project: </h2>
          <p>{ project.stacks.map((stack) => (
            <div key={stack}>
              <p>{ `- ${stack}` }</p>
            </div>
          )) }</p>
          <a href={ project.vercel } target="_blank" rel="noreferrer">See it working!</a>
        </div>
      )) }
      <Footer />
    </div>
  );
}

export default ProjectDetails;
