import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="login">
          <h2 className="login__heading">Welcome back.</h2>
          <label htmlFor="username">Username:</label>
          <input className="login__input" type="text" id="username"></input>
          <label htmlFor="username">Password:</label>
          <input className="login__input" type="text" id="password" required></input>
          <button className="login__submit" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;