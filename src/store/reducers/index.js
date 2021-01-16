import { combineReducers } from 'redux'
import todos from './todoList'
import session from './session'

export default combineReducers({ todos, session })
