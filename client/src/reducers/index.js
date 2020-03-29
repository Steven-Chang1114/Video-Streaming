import {combineReducers} from "redux"
import authReducers from "./authReducers"
import {reducer as formReducer} from "redux-form"
import streamReducers from "./streamReducers"

export default combineReducers({
    user: authReducers,
    form: formReducer,
    streams: streamReducers
})