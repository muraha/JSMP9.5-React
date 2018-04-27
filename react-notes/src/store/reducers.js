import C from '../constants/constants'

const initialState = {
  "notes": [],
  /* 
  {
    "name": "note-0",
    "key": 0,
    "isEditable": false,
    "isDone": false,
    "isArchived": false,
    "content": "Some text 0",
    "created-date": "2017-12-7"
    }
    */
  "placeholder": "TODO: "
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            name: "Name",
            key: action.id,
            isEditable: action.isEditable,
            isDone: false,
            isArchived: false,
            value: action.value ,
            date: new Date().toJSON().substr(0, 10)
          }]
      
      }
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
