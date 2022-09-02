import {combineReducers} from 'redux'
import {messagereducer} from "./Message/Message.reducer"
import {user_reducer} from '../User/User.reducer'
let rootReducer=combineReducers({messsge:messagereducer,user:user_reducer})
export {rootReducer}