import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import mood from './mood'

export default combineReducers({
	routing: routerReducer,
	user,
	mood
})
