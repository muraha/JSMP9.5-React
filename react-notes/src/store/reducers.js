import C from '../constants/constants'
import { createStore } from 'redux'

const store = createStore(noteActions)

export const noteActions = (state, action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      return action.addNote

    case C.UPDATE_NOTE:
      return action.updateNote

    case C.COMPLETE_NOTE:
      return state.isCompleted = !state.isCompleted
    
    case C.ARCHIVE_NOTE:
      return state.isArchived = !state.isArchived
    
    case C.REMOVE_NOTE:
      return action.removeNote
    
    case C.FETCH_NOTES:
      return action.fetchNote
    
    default:
      return state
  }
}
