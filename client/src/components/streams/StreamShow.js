import React from "react"
import {connect} from "react-redux"
import {fetchStream} from "../../actions"
import flv from "flv.js"

class StreamShow extends React.Component{

    constructor(props){
        super(props)

        this.videoRef = React.createRef();
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    render(){
        console.log(this.props)
        if(!this.props.stream){
            return(
                <div>
                    Loading
                </div>
            )
        }

        const {title, description} = this.props.stream

        return(
            <div>
                <video ref = {this.videoRef} style = {{width: "100%"}} controls = {true}/>
                <h1>{title}</h1>
                <h5>{description}</h5>
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
})(StreamShow)