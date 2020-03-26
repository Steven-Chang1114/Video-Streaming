import React from "react"
import {connect} from "react-redux"
import {signIn, signOut} from "../actions"

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "441466345330-aqr7a8e8lkk0le36ot0dhaevoqvunf3a.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.GoogleAuth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.GoogleAuth.isSignedIn.get())
                this.GoogleAuth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn()
        }else{
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.GoogleAuth.signIn()
    }

    onSignOutClick = () => {
        this.GoogleAuth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }else if (this.props.isSignedIn){
            return(
                <button onClick = {this.onSignOutClick} className = "ui red google button">
                    <i className = "google icon" />
                    Sign Out
                </button>
            )
        }else{
            return(
                <button onClick = {this.onSignInClick} className = "ui red google button">
                    <i className = "google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.user.isSignedIn
    }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth)