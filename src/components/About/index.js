import React from 'react';

// == Import
import Header from 'src/components/Header';
import AboutStyled from './AboutStyled';

// == Composant
const About = () => (
  <AboutStyled>
    <Header id="header" slug="A propos" />
    <h1>A propos</h1>
  </AboutStyled>
);


// == Export
export default About;
