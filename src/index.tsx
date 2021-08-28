import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

ReactDOM.render(
  <BrowserRouter basename="/DEATH-NOTE">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
