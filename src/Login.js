import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            remember: false
        }
    }
    onInputChange(key, ev) {
        let target = ev.target;
        let value = key === 'remember' ? target.checked : target.value
        this.setState({
            [key]: value
        })
    }
    render() {
        return (
            <div className="Login">
                <div><input type="text" onChange={ ev => this.onInputChange('email', ev) } value={ this.state.email } placeholder={'email'} /></div>
                <div><input type="text" onChange={ ev => this.onInputChange('password', ev) } value={ this.state.password } placeholder={'password'} /></div>
                <label><input type="checkbox" onChange={ ev => this.onInputChange('remember', ev) } checked={ this.state.remember } /> remember me?</label>
                <div><button onClick={null}>
                                    LOGIN
                                </button></div>
            </div>
        );
    }
}

export default Login;