import React from "react"
import {connect} from "react-redux"
import {fetchStreams} from "../../actions"

class StreamList extends React.Component{
    componentDidMount = () => {
        this.props.fetchStreams()
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId){
            return (
                <div className = "right floated content">
                    <button className = "ui button primary">
                        Edit
                    </button>
                    <button className = "ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(el => {
            return (
                <div className = "item" key = {el.id}>
                    {this.renderAdmin(el)}
                    <i className = "large middle aligned icon camera" />
                    <div className = "content">
                        {el.title}
                        <div className = "description">
                            {el.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h2>Streams</h2>
                <div className = "ui celled list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), 
        currentUserId: state.user.userId
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)