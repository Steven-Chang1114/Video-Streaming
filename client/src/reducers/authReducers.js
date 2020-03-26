const INIT = {
    isSignedIn: null,

}

export default (state = INIT, atcion) => {
    switch(atcion.type){
        case "SIGN_IN":
            return {...state, isSignedIn: true}
        case "SIGN_OUT":
            return {...state, isSignedIn: false}
        default:
            return state
    }
}