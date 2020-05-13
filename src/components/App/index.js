// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';

// == Composant
const App = () => (
  <Switch>
    {/* on peut passer la prop component avec le composant
    si on a pas de data à transmettre */}
    <Route exact path="/" component={Home} />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

// == Export
export default App;
