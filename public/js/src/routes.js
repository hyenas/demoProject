import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import App from './pages/app.js';
import HelloHandler from './pages/hello.js';
import Forms from './pages/form.js';

let Routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloHandler}/>
    <Route name="form" path="/form" handler={Forms}/>
  </Route>
);

export default Routes;