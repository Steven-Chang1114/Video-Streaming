import React from "react"
import {BrowserRouter, HashRouter , Route} from "react-router-dom"
import StreamCreate from "./streams/StreamCreate"
import StreamDelete from "./streams/StreamDelete"
import StreamEdit from "./streams/StreamEdit"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"
import Header from "./Header"


//441466345330-aqr7a8e8lkk0le36ot0dhaevoqvunf3a.apps.googleusercontent.com
const App = () => {
    return(
        <div className = "ui container">
            <HashRouter>
                <div>
                    <Header />
                    <Route path = "/" exact component = {StreamList}/>
                    <Route path = "/streams/new" exact component = {StreamCreate}/>
                    <Route path = "/streams/edit" exact component = {StreamEdit }/>
                    <Route path = "/streams/delete" exact component = {StreamDelete}/>
                    <Route path = "/streams/show" exact component = {StreamShow}/>
                </div>
            </HashRouter>
        </div>
    )
}

export default App