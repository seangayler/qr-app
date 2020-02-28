import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="register-form-container">
        <form className="register-form">
          <h2 className="register-form__header">Register Here</h2>
          <label className="register-form__label" htmlFor="username">Username:</label>
          <input className="register-form__input" type="text" id="username" required></input>
          <label className="register-form__label" htmlFor="password">Password:</label>
          <input className="register-form__input" type="password" id="password" required></input>
          <button className="register-form__submit" type="submit">Click to Register</button>
        </form>
      </div>
    )
  }
}

export default Register;