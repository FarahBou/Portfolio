// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Home from 'src/components/Home';
import About from 'src/components/About';
import Skills from 'src/components/Skills';
import Portfolio from 'src/components/Portfolio';
import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';

// == Composant
const App = () => (
  <Switch>
    {/* on peut passer la prop component avec le composant
    si on a pas de data à transmettre */}
    <Route exact path="/" component={Home} />
    <Route exact path="/A-propos" component={About} />
    <Route exact path="/Compétences" component={Skills} />
    <Route exact path="/Portfolio" component={Portfolio} />
    <Route exact path="/Contact" component={Contact} />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

// == Export
export default App;
