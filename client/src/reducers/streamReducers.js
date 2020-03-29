import _ from "lodash"
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types"

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload} //Why is that even make sense to just return state try later
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload}
        default:
            return state
    }
}