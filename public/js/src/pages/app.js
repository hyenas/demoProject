import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello.js';
import Forms from './form.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app" className="homelink">Home  </Link>
        <Link to="hello" className="hellolink">  Say Hello</Link>
        <Link to="form" className="formlink">  This is a form with bootstrap</Link>
        {/* this is the importTant part */}
        //<RouteHandler/>
      </div>
    );
  }
});

export default App;

