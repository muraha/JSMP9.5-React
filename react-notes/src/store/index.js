import { combineReducers } from 'redux'
import notes from './notes'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  notes,
  visibilityFilter
})
