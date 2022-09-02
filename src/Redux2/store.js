import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension"
// import {messagereducer} from '../Redux2/Message/Message.reducer.jsx'
//import {user_reducer} from '../User/User.reducer.jsx'
import {rootReducer} from './Rootreducer.jsx'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk,logger)))
export {store}