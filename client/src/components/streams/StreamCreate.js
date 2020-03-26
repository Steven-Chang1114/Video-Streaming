import React from "react"
import {Field, reduxForm} from "redux-form"

class StreanCreate extends React.Component {
    render(){
        return(
            <form>
                <Field />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreanCreate)