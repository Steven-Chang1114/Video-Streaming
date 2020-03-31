import React from "react"
import {connect} from "react-redux"
import {fetchStream, editStream} from "../../actions"
import StreamForm from "./StreamForm"
import _ from "lodash"

class StreamEdit extends React.Component{

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    onSubmit = (formValues) => {
        const id = this.props.match.params.id
        console.log(formValues)
        this.props.editStream(id, formValues)
    }

    render(){
        //console.log(this.props)
        if(this.props.stream){
            return(
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} actionCallback = {this.onSubmit}/> 
                </div>
            )
        }else{
            return(
                <div>
                    Loading
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        stream: state.streams[id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit)