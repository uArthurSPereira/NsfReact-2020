import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
