

const visibilityFilter = (state = [], action) => {
  switch (action.type) {
    case 'REVEAL_ARCHIVED_NOTES':
      return [...state]
    
      default:
      return state
  }
}

export default visibilityFilter
