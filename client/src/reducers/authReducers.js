import {SIGN_IN, SIGN_OUT} from "../actions/types"

const INIT = {
    isSignedIn: null,
    id: null
}

export default (state = INIT, atcion) => {
    switch(atcion.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, id: atcion.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, id: null}
        default:
            return state
    }
}