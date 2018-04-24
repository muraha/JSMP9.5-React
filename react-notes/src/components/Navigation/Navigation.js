import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='nav'>  
          <button className='action-button shadow'>All</button>
          <button className='action-button shadow'>toggle new/done</button>
          <button className='action-button shadow'>archived</button>
          <input placeholder='Search'></input>
        </nav>
      </div>  
    )
  }
}
