import C from '../constants/constants'

const nextId = () => {
  this.uniqueId = this.uniqueId || 0
  return this.uniqueId++
}

const date = () => {
  new Date().toJSON().substr(0, 10)
}

/* */

export const addNote = newText => ({
  type: C.ADD_NOTE,
  id: nextId(),
  text: newText.toString(),
  date: date()
})

export const removeNote = id => ({
  type: C.REMOVE_NOTE,
  id
})

// export const setToEditable = (id, value) => ({
//   type: C.NOTE_SET_EDITABLE,
//   id,
//   isEditable: value
// })

export const updateNote = (id, text) => ({
  type: C.UPDATE_NOTE,
  id,
  text
})

export const setCompleted = (id) => ({
  type: C.NOTE_SET_COMPLETED,
  id
})

export const toArchive = (id) => ({
  type: C.NOTE_SET_ARCHIVED,
  id
})

export const search = (value) => ({
  type: C.SHOW_SEARCH_RESULT,
  value
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})