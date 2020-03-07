import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';
import Header from '../header/Header.js';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import Register from '../register/Register.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: {}
    }
  }

  checkLogin() {

  }
  
  render() {
    return (
      <Router>
        <div class="App">
          <Header loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
