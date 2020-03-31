import React from "react"
import {connect} from "react-redux"
import {fetchStream} from "../../actions"

class StreamEdit extends React.Component{

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    render(){
        console.log(this.props)
        if(this.props.stream){
            return(
                <div>
                    {this.props.stream.title}
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

export default connect(mapStateToProps, {fetchStream})(StreamEdit)