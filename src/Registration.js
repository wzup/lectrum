import React, { Component } from 'react';
import './App.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: null,
            lname: null,
            email: null,
            password: null,
        }
        this.register = this.register.bind(this)
    }
    onInputChange(key, ev) {
        let target = ev.target;
        let value = key === 'remember' ? target.checked : target.value
        this.setState({
            [key]: value
        })
    }
    register(ev) {
        fetch('https://lab.lectrum.io/redux/api/user/' + this.props.group, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                "firstName": this.state.fname,
                "lastName": this.state.lname,
                "email": this.state.email,
                "password": this.state.password,
                "invite": this.props.token
            }),
        }).then( res => res.json() )
        .then( json => {
            console.log('[json]', json);
            window.location = '/contacts';
        })
        .catch( err => {
            console.log('[err]', err);
            alert('Something went wrong');
        })
    }
    render() {
        return (
            <div className="Registration">
                <div><input type="text" onChange={ ev => this.onInputChange('fname', ev) } value={ this.state.fname } placeholder={'fname'} /></div>
                <div><input type="text" onChange={ ev => this.onInputChange('lname', ev) } value={ this.state.lname } placeholder={'lname'} /></div>
                <div><input type="text" onChange={ ev => this.onInputChange('email', ev) } value={ this.state.email } placeholder={'email'} /></div>
                <div><input type="text" onChange={ ev => this.onInputChange('password', ev) } value={ this.state.password } placeholder={'password'} /></div>
                <div><button onClick={ this.register }>
                                    CREATE ACCOUNT
                                </button></div>
            </div>
        );
    }
}

export default Registration;