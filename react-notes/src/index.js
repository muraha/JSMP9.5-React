import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Board from './components/Board/Board'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Board count={5} />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
