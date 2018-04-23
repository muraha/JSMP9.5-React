import React, { Component } from 'react'
import Note from './Note'

export default class Board extends Component{
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 33,
          note: "call Lise"
        },
        {
          id: 34,
          note: "Email Vlad"
        },
				{
					id: 35,
					note: "Order printer ink"
				}
      ]
    }
    this.eachNote = this.eachNote.bind(this)
  }

  eachNote = (note, id) => (
    <Note key={id}
      index={id}
      value={note.note}>
      </Note> 
    )


  render() {
		return (
      <div className="board">
        <div className="notes__wrapper">  
				  {this.state.notes.map(this.eachNote)}
        </div>
      </div>  
		)
	}
}
