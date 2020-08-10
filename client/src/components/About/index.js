import React from 'react';

// == Import
import Header from 'src/components/Header';
import CV from 'src/assets/about/CV_Farah_Bouzbib.pdf';
import Profil from 'src/assets/about/profil.jpg';
import moto from 'src/assets/about/moto.png';
import piano from 'src/assets/about/piano.png';
import travel from 'src/assets/about/travel.png';
import fitness from 'src/assets/about/fitness.png';
import videogames from 'src/assets/about/videogames.png';
import astronomy from 'src/assets/about/astronomie.png';
import Download from 'src/assets/about/download.png';
import Linkedin from 'src/assets/about/linkedin.svg';
import AboutStyled from './AboutStyled';

// == Composant
const About = () => (
  <AboutStyled>
    <Header id="header" slug="A propos" />
    <h1>A propos de Farah Bouzbib</h1>
    <div id="aboutMe">
      <img src={Profil} alt="profil" className="profil" />
      <p>
        Anciennement ingénieure calculs chez Framatome (ex-Areva),
        je suis devenue depuis peu développeuse web spécialisée en Front-end | React/Redux.
      </p>
      <p>
        En effet, mon appétence pour la programmation, mon interêt pour le design et la création m'ont naturellement emmené vers le métier
        de développeur web.
      </p>
      <p>
        Je me suis donc lancée en octobre 2019 dans une formation de développeur web fullstack
        au sein de l'école O'clock (labelisée Grande Ecole du Numérique). Un parcours accessible sur admission
        (tests de logique et d'anglais, vidéo de motivation de 15 min),
        intensif et d'une durée de 5 mois (3 mois de socle, 1 mois de spécialisation puis 1 mois de projet from scratch en équipe).
      </p>
      <p>
        Cette formation est dispensée selon un modèle de télé-présentiel obligatoire
        (classe virtuelle live avec des professeurs travaillant depuis chez eux ). Les journées types comportent
        des cours théoriques de 5h puis 2h d'applications pratiques individuelles ou en pair programming.
      </p>
      <p>
        L'acquisition de nouvelles compétences liées au web m'apporte beaucoup de plaisir, mais je trouve également mon bonheur dans mes hobbies :
      </p>
      <div id="hobbies">
        <img src={moto} alt="profil" />
        <img src={piano} alt="profil" />
        <img src={astronomy} alt="profil" />
        <img src={travel} alt="profil" />
        <img src={fitness} alt="profil" />
        <img src={videogames} alt="profil" />
      </div>
      <a
        id="button"
        href={CV}
        download
      >
        Pour en savoir plus :  CV
        <img id="icon" src={Download} alt="CV" />
        <a
          href="https://www.linkedin.com/in/farah-bouzbib-079024109/"
        >
          <img id="icon" src={Linkedin} alt="linkedin" />
        </a>
      </a>
    </div>
  </AboutStyled>
);


// == Export
export default About;
