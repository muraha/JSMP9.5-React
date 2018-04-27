const nextId = () => {
  this.uniqueId = this.uniqueId || 0
  return this.uniqueId++
}

const date = () => {
  new Date().toJSON().substr(0, 10)
}

export const addNote = text => ({
  type: 'ADD_NOTE',
  id: nextId(),
  isEditable: false,
  value: text,
  date: date()
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
