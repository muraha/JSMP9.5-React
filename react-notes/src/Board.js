import React, { Component } from 'react'
import Note from './Note'
import MdAdd from 'react-icons/lib/md/note-add'

export default class Board extends Component{
  constructor(props) {
    super(props)
    this.state = {
      notes:[]
    };
    this.add = this.add.bind(this)
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.nextId = this.nextId.bind(this)
  }

  componentWillMount = () => {
    var self = this
    if (this.props.count) {
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
				.then(response => response.json())
				.then(json => json[0].split('. ').forEach(sentence => self.add(sentence.substring(0, 25))))
		}
	}


  add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	nextId = () => {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
  }

  update = (newText, i) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i) ?  note : {...note, note:newText}
      )
    }))
  }

  remove = (id) => {
    console.log('remove ' + id);
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote = (note, i) => (
    <Note key={note.id}
      index={note.id}
      value={note.note}
      onChange={this.update}
      onRemove={this.remove}>
      </Note> 
    )

  render() {
		return (
      <div className='board'>
        <button onClick={this.add.bind(null, 'Edit Me')}
          id='add'>Create note <MdAdd /></button>
        <input placeholder='Search'></input>
        <div className='notes__wrapper'>  
				  {this.state.notes.map(this.eachNote)}
        </div>
      </div>  
		)
	}
}
