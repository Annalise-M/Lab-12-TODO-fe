import React, { Component } from 'react';
import { signUp, signIn} from './todos-api.js';


export default class AuthPage extends Component {

    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }


    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }


    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        console.log(user.body, 'userrrrrrrrrrrrrrrrrrrrrrrrrrboddddyyyyyyyyyyyyyyyyyy');

        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }


    componentDidCatch(err, errInfo) {
        console.log('errrrrrrrrrrrrrrrrrrrrr', err, errInfo);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSignUp}>
                    <p>
                    Sign up:
                    </p>
                    <label>
                        Email
                            <input type="text" onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail}/>
                    </label>
                    <p></p>
                    <label>
                        Password
                            <input type="password" onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label>
                        <button>Submit</button>
                    </form>
                {/*  */}
                <form onSubmit={this.handleSignUp}>
                    <p>
                        Sign in:
                    </p>
                    <label>
                        Email
                            <input type="text" onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail}/>
                    </label>
                    <p></p>
                    <label>
                        Password
                            <input type="password" onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                    </label>
                        <button onClick="">Submit</button>
                    </form>
            </div>
    )}
}

