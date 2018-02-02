import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './loginForm';
import { withAuth } from '@okta/okta-react';

class Login extends Component {
    state = {
        authenticated: null
    }

    _isMounted = false;

    componentWillMount() {
        //this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    componentDidMount() {
        this._isMounted = true;
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated && this._isMounted) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this.state.authenticated === null) return null;
        return this.state.authenticated ?
            <Redirect to={{ pathname: '/' }} /> :
            <LoginForm baseUrl={this.props.baseUrl} />;
    }
}

export default withAuth(Login)