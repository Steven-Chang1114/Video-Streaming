import React from "react"
import {connect} from "react-redux"
import {createStream} from "../../actions"
import StreamForm from "./StreamForm"

class StreanCreate extends React.Component {

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render(){
        return(
            <div>
                <h3>Create Stream</h3>
                <StreamForm actionCallback = {this.onSubmit}/>  
            </div>
        )
    }
}

export default connect(null, {
    createStream
})(StreanCreate)