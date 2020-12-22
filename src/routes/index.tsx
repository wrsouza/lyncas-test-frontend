import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '~/pages/Search'; 
import Favorites from '~/pages/Favorites';

export default () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);