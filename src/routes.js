import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/detail/:id" component={Detail} />
  </Switch>
);

export default Routes;
