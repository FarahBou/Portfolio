import React from 'react';

// == Import
import Header from 'src/components/Header';
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
import Jest from 'src/assets/skills/jest.png';
import GraphQL from 'src/assets/skills/graphql.png';
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = () => (
  <SkillsStyled>
    <Header id="header" slug="Skills" />
    <h1>Compétences</h1>
    <div id="box">
      <div className="tooltip">
        <img src={ReactNat} alt="react" />
        <span className="text">React</span>
      </div>
      <div className="tooltip">
        <img src={Redux} alt="redux" />
        <span className="text">Redux</span>
      </div>
      <div className="tooltip">
        <img src={Js} alt="js" />
        <span className="text">JS ES6</span>
      </div>
      <div className="tooltip">
        <img src={SemanticUi} alt="semanticui" />
        <span className="text">Semantic UI</span>
      </div>
      <div className="tooltip">
        <img src={Bootstrap} alt="bootstrap" />
        <span className="text">Bootstrap</span>
      </div>
      <div className="tooltip">
        <img src={Html} alt="html" />
        <span className="text">HTML 5</span>
      </div>
      <div className="tooltip">
        <img src={Css} alt="css" />
        <span className="text">CSS 3</span>
      </div>
      <div className="tooltip">
        <img src={Php} alt="php" />
        <span className="text">PHP</span>
      </div>
      <div className="tooltip">
        <img src={Lumen} alt="lumen" />
        <span className="text">Lumen</span>
      </div>
      <div className="tooltip">
        <img src={Sql} alt="sql" />
        <span className="text">SQL</span>
      </div>
      <div className="tooltip">
        <img src={Api} alt="api" />
        <span className="text">API</span>
      </div>
      <div className="tooltip">
        <img src={Linux} alt="linux" />
        <span className="text">Linux mint</span>
      </div>
      <div className="tooltip">
        <img src={Github} alt="github" />
        <span className="text">GitHub</span>
      </div>
      <div className="tooltip">
        <img src={Node} alt="node" />
        <span className="text">Node.js</span>
      </div>
      <div className="tooltip">
        <img src={Mongo} alt="mongo" />
        <span className="text">MongoDB</span>
      </div>
    </div>
    <div id="work">
      <h2>En cours d'acquisition : </h2>
      <div className="tooltip">
        <img src={GraphQL} alt="graphql" />
        <span className="textWork">GraphQL</span>
      </div>
      <div className="tooltip">
        <img src={Symfony} alt="symfony" />
        <span className="textWork">Symfony</span>
      </div>
      <div className="tooltip">
        <img src={Python} alt="python" />
        <span className="textWork">Python</span>
      </div>
      <div className="tooltip">
        <img src={Jest} alt="jest" />
        <span className="textWork">Jest</span>
      </div>
    </div>
  </SkillsStyled>
);


// == Export
export default Skills;
