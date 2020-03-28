import React from "react"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {createStream} from "../../actions"

class StreanCreate extends React.Component {

    renderInput = (formProps) => {
        const hasError = `field ${(formProps.meta.error && formProps.meta.touched) ? "error" : ""}`
        return(
            <div className = {hasError}>
                <label>{formProps.text}</label>
                <input {...formProps.input} autoComplete = "off"/>
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    renderError = ({touched, error}) => {
        if(touched && error){
            return (
                <div className = "ui error message">
                    <div className = "header">{error}</div>
                </div>           
            )
        }
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    

    render(){
        return(
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form error">
                <Field name = "title" text = "Enter title" component = {this.renderInput}/>
                <Field name = "description" text = "Enter description" component = {this.renderInput}/>
                <button className = "ui button primary">Submit</button>
            </form>   
        )
    }
}

const validate = (formValues) => {
    const error = {}
    if(!formValues.title){
        error.title = "Please define Title"
    }

    if(!formValues.description){
        error.description = "Please define Description"
    }

    return error
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreanCreate)