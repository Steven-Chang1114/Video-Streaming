import {SIGN_IN, SIGN_OUT} from "../actions/types"

const INIT = {
    isSignedIn: null,
    userId: null
}

export default (state = INIT, atcion) => {
    switch(atcion.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: atcion.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}
        default:
            return state
    }
}