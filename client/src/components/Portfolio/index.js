import React from 'react';

// == Import
import Header from '../Header';
import Project from '../Project';
import projects from '../data/projects';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = () => (
  <PortfolioStyled>
    <div id="body">
      <Header id="header" slug="Portfolio" />
      <h1>Projets</h1>
      <div id="cards">
        {projects.map((project) => <Project project={project} />)}
      </div>
    </div>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
