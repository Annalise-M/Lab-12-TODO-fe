import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-rourer-dom";
import ListPage from './ListPage';
import AuthPage from './AuthPage';
//import Todos from './ListPage.js';
//import AuthPage from './AuthPage.js';

import './App.css';
// import { render } from '@testing-library/react';



export default class App extends Component {

  //popping localstorage token into  react state
  
  state = { 
    token: localStorage.getItem('TOKEN'),
  }

  handleToken = (token) => {
    //this sets the token in state so it can "automagically" respond to changes
    this.setState({ token: token })

    //keeps it from needing login every time...
    localStorage.setItem('TOKEN', token);
  }


  handleClearToken = () => {
    //calls on the set token in state and empties it
    this.setState({ token: '' })

    localStorage.setItem('TOKEN', '')
  }

    render() {
      return (
        <div>
          <header className="App-header">
            <Router>
              <main>

                <div className="sidebar">
                  {
                    this.state.token &&
                    <>
                      <Link to='/'>List</Link>
                      <Link to='/login'>
                        <button onClick={this.handleClearToken}>Log out</button>
                      </Link>
                    </>
                  }
                </div>

                <div className="content">
                  <Switch>
                    <Route
                      path="/"
                      exact
                      render={(routerProps) => <ListPage token={this.state.token} {...routerProps} />}
                    />
                    <Route
                      path="/login"
                      exact
                      render={(routerProps) => <AuthPage token={this.state.token} {...routerProps} />}
                    />
                    
                  </Switch>
                </div>
              </main>
            </Router>
          </header>
        </div>
      )
    }
    
}

