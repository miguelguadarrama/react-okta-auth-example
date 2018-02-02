import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './home';
import Login from './login';
import Protected from './protected';

//function onAuthRequired({ history }) {
// history.push('/login');
//}

const config = {
  issuer: 'https://gcfund.okta.com',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oamtpndpkJY89YAj2p6'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Security issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={window.location.origin + '/implicit/callback'}
          //onAuthRequired={onAuthRequired} 
          //@okta/okta-auth-js seems to have a bug
          >
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <Login baseUrl='https://gcfund.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </div>
    );
  }
}

export default App