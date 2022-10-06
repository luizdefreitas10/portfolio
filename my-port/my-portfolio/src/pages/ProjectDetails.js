import React from 'react';
import { useParams } from 'react-router-dom';
import Clock from '../components/Clock';
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
          <img src={ `${project.src}`} alt={`${project.name} - application`} style={{ height: '150px', width: '150px' }}/>
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
      <Clock />
    </div>
  );
}

export default ProjectDetails;