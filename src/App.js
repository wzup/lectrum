import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Login from './Login';
import Contacts from './Contacts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'reg',
            group: '6vf77z4hd5',
            token: 'rtASDLastuev77'
        }
    }
    render() {
        let body = null;

        // switch(window.location.pathname) {
        //     case '/registration':
        //         body = <Registration group={this.state.group} token={this.state.token} />;
        //         break;
        //     case '/login':
        //         body = <Login />;
        //         break;
        //     case '/contacts':
        //         body = <Contacts />;
        //         break;
        //     default:
        //         body = <Login />;
        // }


        switch(this.state.mode) {
            case 'reg':
                body = <Registration group={this.state.group} token={this.state.token} />;
                break;
            case 'login':
                body = <Login />;
                break;
            case 'contacts':
                body = <Contacts />;
                break;
            default:
                body = <Login />;
        }
        return (
        <div className="App">
            <header className="App-header">
                <a href={'/login'} className={'linkPadding'}>LOGIN</a>
                <a href={'/registration'} className={'linkPadding'}>REG</a>
            </header>
            <section>
                { body }
            </section>
      </div>
        );
    }
}

export default App;