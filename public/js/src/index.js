import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Routes from './routes.js';

Router.run(Routes, function (Handler) {
  React.render(<Handler />, document.body);
});