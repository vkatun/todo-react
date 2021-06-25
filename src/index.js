import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App/App';
import { GlobalStyle } from './GlobalStyle'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
