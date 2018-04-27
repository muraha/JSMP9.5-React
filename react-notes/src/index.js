import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Board from './components/Board/Board'
import reducer from './store/reducers'

import './index.css';


const store = createStore(reducer)

render(
  <Provider store={store}>
      <Board count={5} />
  </Provider>,
  document.getElementById('root'));
