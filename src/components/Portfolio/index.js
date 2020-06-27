import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import AUSGif from 'src/assets/aus.gif';
import PGif from 'src/assets/portfolio.gif';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = () => (
  <PortfolioStyled>
    <Header id="header" slug="Portfolio" />
    <h1>Portfolio</h1>
    <div className="cards">
      <a
        className="card"
        href="http://209.182.238.244"
      >
        <img
          src={AUSGif}
          className="gif"
          alt="gif"
        />
        <h2>Adopte une série</h2>
      </a>
      <a
        className="card"
        href=""
      >
        <img
          src={PGif}
          className="gif"
          alt="gif2"
        />
        <h2>Ce Portfolio</h2>
      </a>
    </div>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
