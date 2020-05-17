import React from 'react';

// == Import

import Header from 'src/components/Header';
import SkillsStyled from './SkillsStyled';
import ReactNat from 'src/assets/skills/icons8-react-native.svg';
import Redux from 'src/assets/skills/icons8-redux.svg';
import Js from 'src/assets/skills/icons8-js-96.png';
import SemanticUi from 'src/assets/skills/semantic-ui-seeklogo.com.svg';
import Bootstrap from 'src/assets/skills/icons8-bootstrap.svg';
import Html from 'src/assets/skills/icons8-html-5.svg';
import Css from 'src/assets/skills/icons8-css3.svg';
import Php from 'src/assets/skills/icons8-php-96.png';
import Lumen from 'src/assets/skills/lumen-seeklogo.com.svg';
import Sql from 'src/assets/skills/icons8-sql-96.png';
import Linux from 'src/assets/skills/icons8-linux-mint.svg';
import Api from 'src/assets/skills/icons8-api-96.png';
import Github from 'src/assets/skills/icons8-github.svg';
import Node from 'src/assets/skills/icons8-nodejs.svg';
import Mongo from 'src/assets/skills/icons8-mongodb.svg';
import Symfony from 'src/assets/skills/icons8-symfony.svg';
import Python from 'src/assets/skills/icons8-python.svg';

// == Composant
const Skills = () => (
  <SkillsStyled>
    <Header id="header" slug="Skills" />
    <h1>Compétences</h1>
    <div id="box">
      <img src={ReactNat} alt="react" />
      <img src={Redux} alt="redux" />
      <img src={Js} alt="js" />
      <img src={SemanticUi} alt="semanticui" />
      <img src={Bootstrap} alt="bootstrap" />
      <img src={Html} alt="html" />
      <img src={Css} alt="css" />
      <img src={Php} alt="php" />
      <img src={Lumen} alt="lumen" />
      <img src={Sql} alt="sql" />
      <img src={Api} alt="api" />
      <img src={Linux} alt="linux" />
      <img src={Github} alt="github" />
    </div>
    <div id="work">
      <h2>En cours d'acquisition : </h2>
      <img src={Node} alt="node" />
      <img src={Mongo} alt="mongo" />
      <img src={Symfony} alt="symfony" />
      <img src={Python} alt="python" />
    </div>
  </SkillsStyled>
);


// == Export
export default Skills;
