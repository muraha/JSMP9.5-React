import React, { Component } from 'react'
import Note from '../Notes/Note'

import MdAdd from 'react-icons/lib/md/note-add'

import { connect } from 'react-redux'
import { addNote, removeNote, updateNote } from '../../actions/index'

class Notes extends Component {
 
  componentWillMount = () => {
    if (this.props.count) {
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
        .then(response => response.json())
        .then(json => json[0].split('. ').forEach(sentence => (this.add(sentence.substring(0, 25)))))
    }
  }

  add = (text = '') => {
   return this.props.addNote(typeof text === 'object' ? 'New note: doubleclick to edit' : text)}

  remove = (key) => {
    this.props.removeNote(key)
  }

  update = (key, newText) => {
    this.props.updateNote(key, newText)
  }

  eachNote = (note) => {
    return (
    <Note key={note.key}
      index={note.key}
      text={note.text}
      onChange={this.update}
      onRemove={this.remove}
    >
    </Note>
    )}

  render() {
    const { notes } = this.props;
    return (
      <div>
        <button className='action-button shadow' onClick={this.add}
          id='add'>
          Create note <MdAdd />
        </button>
        <div className='notes__wrapper'>
          {notes.map(this.eachNote)}
        </div>
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (...args) => dispatch(addNote(...args)),
    removeNote: (...args) => dispatch(removeNote(...args)),
    updateNote:(...args) => dispatch(updateNote(...args)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
