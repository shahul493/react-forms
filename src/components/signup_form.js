import React, { Component } from 'react';
import axios from 'axios'
import _ from 'lodash';
import Validator from 'validator';

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {}
            
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    validateInput(data) {
        let errors = {};

        if(Validator.isNull(data.username)) {
            errors.username = "This field is required";
        }

        if(Validator.isNull(data.password)) {
            errors.password = "Password field is mandatory"
        }

        return {
            errors,
            isValid : _.isEmpty(errors)
        }
    }

    onInputChange(event) {        
        this.setState({
            [event.target.name]: event.target.value
        });        
    }

    onFormSubmit(event) {        
        event.preventDefault();
        this.setState({errors: {}});                
        //axios.post('/api/users', {user: this.state });       
        //const { errors, isValid } = this.validateInput(this.state);
        
    }

    render() {

        const { errors } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>Login Form</h1>
                    <div className="form-group">
                        <label className="control-label">Username</label>
                        <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.onInputChange}  />
                        { errors.username && <span className="help-block">{errors.username}</span> }
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onInputChange}  />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">
                            Sign Up!!
                        </button>
                    </div>

            </form>

        );
    }
}

export default SignupForm;