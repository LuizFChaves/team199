import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Header} from './components'

import {Homepage} from './pages'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>

        <Route exact path="/">
          <Homepage/>
        </Route>

        <Route path="/">
          404 - FEZ MERDA AE GORDÃO, NÃO SEI ONDE TU QUERIA CHEGAR
        </Route>
      </Switch>
    </Router>
  );
}

export default App;