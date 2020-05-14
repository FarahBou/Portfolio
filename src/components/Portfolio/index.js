import React from 'react';

// == Import

import Header from 'src/components/Header';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = () => (
  <PortfolioStyled>
    <Header id="header" slug="Portfolio" />
    <h1>Portfolio</h1>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
