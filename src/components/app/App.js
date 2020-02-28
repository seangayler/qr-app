import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from '../header/Header.js';
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
