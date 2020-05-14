import React from 'react';

// == Import
import Music from 'src/components/Home/Music';
import Header from 'src/components/Header';
import AboutStyled from './AboutStyled';

// == Composant
const About = () => (
  <AboutStyled>
    <Music id="music" />
    <Header id="header" slug="A propos" />
    <h1>A propos</h1>
  </AboutStyled>
);


// == Export
export default About;
