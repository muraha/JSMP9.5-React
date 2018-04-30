import React, { Component } from 'react'
import Note from '../Notes/Note'
import C from '../../constants/constants'
import MdAdd from 'react-icons/lib/md/note-add'
import { connect } from 'react-redux'
import { addNote, removeNote, updateNote, toArchive, setCompleted } from '../../actions'

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

  eachNote = (note) => {
    return (
    <Note key={note.key}
      index={note.key}
      text={note.text}
      isCompleted={note.isCompleted}
      isArchived={note.isArchived}
      onChange={this.props.updateNote}
      onRemove={this.props.removeNote}
      onSetComplete={this.props.setCompleted}
      onMoveToArchive={this.props.toArchive}
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

const getVisibleTodos = (notes, filter) => {
  switch (filter) {
    case C.SHOW_ALL:
      return notes.filter(t => !t.isArchived);
    case C.SHOW_NEW:
      return notes.filter(t => !t.isCompleted && !t.isArchived);
    case C.SHOW_COMPLETED:
      return notes.filter(t => t.isCompleted && !t.isArchived);
    case C.SHOW_ARCHIVE:
      return notes.filter(t => t.isArchived);
    case C.SHOW_SEARCH_RESULT:
      return notes.filter(t => t._inSearch)
    default:
      throw new Error("Unknown filter: " + filter);
  }
}  

const mapStateToProps = state => ({ 
  notes: getVisibleTodos(state.notes, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (...args) => dispatch(addNote(...args)),
    removeNote: (...args) => dispatch(removeNote(...args)),
    updateNote: (...args) => dispatch(updateNote(...args)),
    setCompleted: (...args) => dispatch(setCompleted(...args)),
    toArchive: (...args) => dispatch(toArchive(...args)),    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
