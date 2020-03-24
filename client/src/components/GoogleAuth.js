import React from "react"

class GoogleAuth extends React.Component{
    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "441466345330-aqr7a8e8lkk0le36ot0dhaevoqvunf3a.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.GoogleAuth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.GoogleAuth.isSignedIn.get()})
                this.GoogleAuth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.GoogleAuth.isSignedIn.get()}) 
    }

    onSignIn = () => {
        this.GoogleAuth.signIn()
    }

    onSignOut = () => {
        this.GoogleAuth.signOut()
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null
        }else if (this.state.isSignedIn){
            return(
                <button onClick = {this.onSignOut} className = "ui red google button">
                    <i className = "google icon" />
                    Sign Out
                </button>
            )
        }else{
            return(
                <button onClick = {this.onSignIn} className = "ui red google button">
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

export default GoogleAuth