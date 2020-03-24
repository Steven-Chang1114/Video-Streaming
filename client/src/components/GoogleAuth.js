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
            })
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>null</div>
        }else if (this.state.isSignedIn){
            return <div>Logged in</div>
        }else{
            return <div>Not logged in</div>
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth