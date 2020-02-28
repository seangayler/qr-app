import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form">
          <h2 className="login-form__header">Login Here</h2>
          <label className="login-form__label" htmlFor="username">Username:</label>
          <input className="login-form__input" type="text" id="username" required></input>
          <label className="login-form__label" htmlFor="password">Password:</label>
          <input className="login-form__input" type="password" id="password" required></input>
          <button className="login-form__submit" type="submit">Click to Login</button>
        </form>
      </div>
    )
  }
}

export default Login;