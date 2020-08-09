import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './index.css';
import App from './App'
import Home from './Pages/Home'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import NotFound from './Pages/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/pagina1" component={Page1} />
        <Route path="/pagina2" component={Page2} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
