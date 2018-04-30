import React from 'react'
import Notes from '../Notes/Notes'
import Navigation from '../Navigation/Navigation'

import './Board.css'

const Board = () => (
  <div className='board'>
    <Navigation />  
    <Notes count={100}/>
  </div>  
)

export default Board
