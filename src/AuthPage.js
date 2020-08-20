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
                <div className="wrapper">
                {/* <!-- OVERLAY ========================= --> */}
                    <div className="overlay first"></div>
                    <div className="overlay second"></div>
                    <div className="overlay third"></div>
                    
                    {/* !-- NAVBAR -- */}
                    <nav className="navbar">
                        <div className="menu">
                            <ion-icon name="ios-menu">menu</ion-icon>
                        </div>
                        <div className="lang">eng</div>
                        <div className="search">
                            <ion-icon name="ios-search"></ion-icon>
                        </div>
                    </nav>

                    {/* work on transforming NAVBAR into SIDEBAR */}
                    <div className="media">
                        <ul>
                            {/* twitter => my lists => ListPage */}
                            <li>sign up</li>
                            {/* instagram = sign in */}
                            <li>sign in</li>
                            {/* facebook => sign up */}
                            <li>my lists</li>
                        </ul>
                    </div>

                    <div className="welcome">
                        {/* <img> ---- IMAGE placement here ---- </img> */}
                        <p>Welcome</p>
                    </div>

                    
                </div>
                

                {/* SignUp form with user email and pw inputs & submit button */}
                <form onSubmit={this.handleSignUp}>
                    <p>Sign up:</p>
                    <label>
                        Email
                            <input type="text" onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail}/>
                    </label>
                        <p></p>
                    <label>
                        Password
                            <input type="password" onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label>
                    <break />
                        <p class="wait">
                            <button>Submit</button>
                        </p>
                    </form>
                    
                {/* SignIn form with user email and pw inputs & submit button */}
                    <form onSubmit={this.handleSignUp}>
                        <p>Sign in:</p>
                        <label>
                            Email
                                <input type="text" onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail}/>
                        </label>
                            <p></p>
                        <label>
                            Password
                                <input type="password" onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                        </label>
                        <break />
                        <p class="wait">
                            <button onClick="">Submit</button>
                        </p>
                    </form>
            </div>
    )}
}

