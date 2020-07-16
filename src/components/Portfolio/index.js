import React from 'react';

// == Import
import Header from 'src/components/Header';
import Project from 'src/components/Project';
import projects from 'src/components/data/projects';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = () => (
  <PortfolioStyled>
    <div id="body">
      <Header id="header" slug="Portfolio" />
      <h1>Portfolio</h1>
      <div id="cards">
        {projects.map((project) => <Project project={project} />)}
      </div>
    </div>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
