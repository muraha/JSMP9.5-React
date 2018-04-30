const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return state !== action.filter ?
       action.filter :
       state
    default:
      return state
  }
}

export default visibilityFilter
