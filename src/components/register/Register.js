import React, { Component } from 'react';
import '../login/Login.css';

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/register');
    xhr.send();
  }
  
  render() {
    return (
      <div className="login-container">
        <form className="login" onSubmit={this.handleSubmit}>
          <h2 className="login__heading">We'd love to have you.</h2>
          <label htmlFor="username">Username (login with this):</label>
          <input className="login__input" type="text" id="username" placeholder="5 to 20 characters" minlength="5" maxlength="20" required></input>
          <label htmlFor="email">Email:</label>
          <input className="login__input" type="email" id="email" required></input>
          <label htmlFor="username">Password:</label>
          <input className="login__input" type="text" id="password" placeholder="8 to 20 characters" minlength="8" maxlength="20" required></input>
          <button className="login__submit" type="submit">Register</button>
        </form>
    </div>
    )
  }
}

export default Register;