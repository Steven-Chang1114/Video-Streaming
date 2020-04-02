import React from "react"
import {connect} from "react-redux"
import {fetchStream, deleteStream} from "../../actions"
import Modal from "../Modal"
import history from "../../history"
import {Link} from "react-router-dom"

class StreamDelete extends React.Component{

    componentDidMount = () => {
        //console.log(this.props)
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    renderActions = () => {
        const id = this.props.match.params.id
        return(
            <React.Fragment>
                <button onClick = {() => this.props.deleteStream(id)} className = "ui negative button">Delete</button>
                <Link to = "/" className = "ui button">Cancel</Link>
            </React.Fragment> 
        )
    }

    renderContent = () => {
        if(!this.props.stream){
            return "Are you sure you want to delete the stream?"
        }else{
            return `Are you sure you want to delete ${this.props.stream.title}`
        }
    }

    render(){
        return(
            <div>
                <Modal 
                    title = "Delete Stream"
                    content = {this.renderContent()}
                    actions = {this.renderActions()}
                    onDismiss = {() => history.push("/")}
                />
            </div>
        )
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
    deleteStream
})(StreamDelete)