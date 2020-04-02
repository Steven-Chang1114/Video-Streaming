import React from "react"
import {connect} from "react-redux"
import {fetchStream} from "../../actions"
import Modal from "../Modal"
import history from "../../history"

class StreamDelete extends React.Component{

    componentDidMount = () => {
        //console.log(this.props)
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    renderActions = () => {
        return(
            <React.Fragment>
                <button className = "ui negative button">Delete</button>
                <button className = "ui button">Cancel</button>
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
    fetchStream
})(StreamDelete)