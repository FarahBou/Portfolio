// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Music from 'src/components/Home/Music';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Skills from 'src/components/Skills';
import Portfolio from 'src/components/Portfolio';
import Contact from 'src/containers/Contact';
import Movies from 'src/components/Movies';
import NotFound from 'src/components/NotFound';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Music id="music" />
    <Switch>
      {/* on peut passer la prop component avec le composant
      si on a pas de data à transmettre */}
      <Route exact path="/" component={Home} />
      <Route exact path="/A-propos" component={About} />
      <Route exact path="/Compétences" component={Skills} />
      <Route exact path="/Projects" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Movies" component={Movies} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </AppStyled>
);

// == Export
export default App;
