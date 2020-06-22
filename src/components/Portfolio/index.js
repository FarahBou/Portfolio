import React from 'react';
import Iframe from 'react-iframe';

// == Import
import Header from 'src/components/Header';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = () => (
  <PortfolioStyled>
    <Header id="header" slug="Portfolio" />
    <h1>Portfolio</h1>
    <div className="cards">
      <div className="card">
        <Iframe
          src="https://giphy.com/embed/jRqeIOyU0ut8EQtj8U"
          className="gif"
          allowFullScreen
        />
        <h2>Adopte une série</h2>
        <p>Projet de fin de formation</p>
      </div>
    </div>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
