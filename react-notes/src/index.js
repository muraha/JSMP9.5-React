import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Board from './components/_Board/Board'
import reducer from './store/reducers'

import './index.css';


const store = createStore(reducer)

store.subscribe(()=> console.log(store.getState()))

render(
  <Provider store={store}>
      <Board/>
  </Provider>,
  document.getElementById('root'));
