import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { eventReducer } from './event.reducer'
import { mentorReducer } from './mentor.reducer'
import { resourceReducer } from './resource.reducer'

const rootReducer = combineReducers({
    event: eventReducer,
    mentor: mentorReducer,
    auth:authReducer,
    resource: resourceReducer
})

export default rootReducer
