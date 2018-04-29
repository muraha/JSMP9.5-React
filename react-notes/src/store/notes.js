import C from '../constants/constants'

export default (state=[], action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      console.log('Added Note is # ' + action.id);
      return [
          ...state,
          {
            name: "Name-" + action.id,
            key: action.id,
            isCompleted: false,
            isArchived: false,
            text: action.text ,
            date: new Date().toJSON().substr(0, 10)
          }]
      

    case C.REMOVE_NOTE:
      console.log('Note # ' + action.id + ' was removed');
      return state.filter(note => note.key !== action.id)
      

    case C.UPDATE_NOTE:
      console.log('Note # ' + action.id + ' was updated');    
      return state.map(note => note.key === action.id ? { ...note, text: action.text } : note)
      
    
    case C.NOTE_SET_COMPLETED:
      console.log('Note # ' + action.id + ' markCompleted Action'); 
      return state.map(note => note.key === action.id ? { ...note, isCompleted: !note.isCompleted } : note)
    

    case C.NOTE_SET_ARCHIVED:
      console.log('Note # ' + action.id + ' toArchive Action'); 
      return state.map(note => note.key === action.id ? { ...note, isArchived: !note.isArchived } : note)
  

    // case C.FETCH_NOTES:
    //   return action.fetchNote

    default:
      return state
  }
}
