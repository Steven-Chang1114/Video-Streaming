import React from "react"
import {Field, reduxForm} from "redux-form"

class StreanCreate extends React.Component {

    renderInput = (formProps) => {
        return(
            <div className = "field">
                <label>{formProps.text}</label>
                <input {...formProps.input}/>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(this.props);
        console.log(formValues)
    }

    

    render(){
        return(
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
                <Field name = "title" text = "Enter title" component = {this.renderInput}/>
                <Field name = "description" text = "Enter description" component = {this.renderInput}/>
                <button className = "ui button primary">Submit</button>
            </form>   
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreanCreate)