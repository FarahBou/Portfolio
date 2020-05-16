import React from 'react';
import { Button } from 'semantic-ui-react'

// == Import
import Header from 'src/components/Header';
import CV from 'src/assets/CV.pdf';
import Profil from 'src/assets/profil.jpg';
import moto from 'src/assets/moto.png';
import piano from 'src/assets/piano.png';
import travel from 'src/assets/travel.png';
import fitness from 'src/assets/fitness.png';
import videogames from 'src/assets/videogames.png';
import astronomy from 'src/assets/astronomie.png';
import Download from 'src/assets/download.png';
import AboutStyled from './AboutStyled';

// == Composant
const About = () => (
  <AboutStyled>
    <Header id="header" slug="A propos" />
    <h1>A propos de Farah Bouzbib</h1>
    <div id="box">
      <img src={Profil} alt="profil" className="profil" />
      <div id="aboutMe">
        <p>
          Anciennement ingénieure calculs chez Framatome (ex-Areva),
          je suis devenu depuis peu développeuse web spécialisée en Front-end | React/Redux.
        </p>
        <p>
          Mes apétences pour la programmation et la création m'ont naturellement emmené vers le métier
          de développeur web.
        </p>
        <p>
          Je me suis donc embarquée en octobre 2019 dans une formation de développeur web fullstack
          au sein de l'école O'clock (labelisée Grande Ecole du Numérique). Un parcours accessible sur admission
          (tests de logique et d'anglais, vidéo de motivation de 15 min),
          intensif et d'une durée de 5 mois.
        </p>
        <p>
          Je trouve mon bonheur dans l'acquisition de nouvelles compétences liées
          au web mais pas seulement, je le trouve également dans mes hobbies :
        </p>
        <div id="hobbies">
          <img src={moto} alt="profil" />
          <img src={piano} alt="profil" />
          <img src={astronomy} alt="profil" />
          <img src={travel} alt="profil" />
          <img src={fitness} alt="profil" />
          <img src={videogames} alt="profil" />
        </div>
        <Button
          id="button"
          href={CV}
          download
        >
          Pour en savoir plus :  CV
          <img id="icon" src={Download} alt="CV" />
        </Button>
      </div>
    </div>
  </AboutStyled>
);


// == Export
export default About;
