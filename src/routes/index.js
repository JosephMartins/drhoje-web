import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Escola from '../cadastro/Escola';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/escola/cadastro" component={Escola} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;