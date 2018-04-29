import C from '../constants/constants'

const initialState = {
  "notes": [],
  /* 
  {
    "name": "note-0",
    "key": 0,
    "isEditable": false,
    "isCompleted": false,
    "isArchived": false,
    "text": "Some text 0",
    "date": "2017-12-7"
    }
    */
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      console.log('Added Note is # ' + action.id);
      return {
        notes: [
          ...state.notes,
          {
            name: "Name-" + action.id,
            key: action.id,
            isCompleted: false,
            isArchived: false,
            text: action.text ,
            date: new Date().toJSON().substr(0, 10)
          }]
      }

    case C.REMOVE_NOTE:
      console.log('Note # ' + action.id + ' was removed');
      return {
        notes: state.notes.filter(note => note.key !== action.id)
      }
    
    // case C.NOTE_SET_EDITABLE:
    // console.log('Note # ' + action.id + ' set editable');
    //   return {
    //     notes: 
    //       state.notes[action.id].isEditable = action.isEditable
    //   }

    case C.UPDATE_NOTE:
    console.log('Note # ' + action.id + ' was updated');    
      return {
        notes: state.notes.map(note => note.key === action.id ? { ...note, text: action.text } : note)
      }
    
    case C.NOTE_SET_COMPLETED:
      console.log('Note # ' + action.id + ' markCompleted Action'); 
      return {
        notes: state.notes.map(note => note.key === action.id ? { ...note, isCompleted: !note.isCompleted } : note)
    }

    case C.NOTE_SET_ARCHIVED:
      console.log('Note # ' + action.id + ' toArchive Action'); 
      return {
      notes: state.notes.map(note => note.key === action.id ? { ...note, isArchived: !note.isArchived } : note)
  }

    // case C.FETCH_NOTES:
    //   return action.fetchNote

    default:
      return state
  }
}
