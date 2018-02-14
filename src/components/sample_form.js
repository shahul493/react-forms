import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            firstNameError: ""
        };

        this.change = this.change.bind(this);
        this.onChange = this.onSubmit.bind(this);

    }

    change = e => {
        //this.props.onChange({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name] :e.target.value
        });      
    }

    validate = () => {
        let isError = false;
        const errors = {};
        if(this.state.firstName.length < 5) {
            isError = true;
            errors.firstNameError = "Username needs to be atlease 5 character long";
        }
        if(isError) {
            this.setState({
                ...this.state,
                ...errors
            });
        }
        return isError;
    }

    onSubmit = e => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        
        const err = this.validate();

        if(!err) {
            //clear or reset form
            this.setState({
                firstName: ""
            });
            this.props.onChange({
                firstName: ""
            });
        }       


    }

    render() {
        return(
            <MuiThemeProvider>
            <form onSubmit={this.onSubmit}>
                <TextField
                name="firstName"                 
                hintText="First Name"              
                floatingLabelText="First Name"
                value={this.state.firstName}
                onChange={e => this.change(e)}
                errorText={this.state.firstNameError}
                floatingLabelFixed                
                />
            </form>
            </MuiThemeProvider>
        );


    }

}