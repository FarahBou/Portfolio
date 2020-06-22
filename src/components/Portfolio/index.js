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
    <div
      className="cards"
      style={{
        minwidth: '100%',
        minheight: '0',
        paddingBottom: '49%',
        position: 'relative',
      }}
    >
      <Iframe
        src="https://giphy.com/embed/jRqeIOyU0ut8EQtj8U"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    </div>
  </PortfolioStyled>
);


// == Export
export default Portfolio;
