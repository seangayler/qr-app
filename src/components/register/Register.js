import React, { Component } from 'react';
import '../login/Login.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/register', {
      method: 'POST', // or 'PUT'
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
  }
  
  render() {
    return (
      <div className="login-container">
        <form className="login" onSubmit={this.handleSubmit}>
          <h2 className="login__heading">We'd love to have you.</h2>
          <label htmlFor="username">Username (login with this):</label>
          <input className="login__input" type="text" name="username" id="username" placeholder="5 to 20 characters" minlength="5" maxlength="20" required onChange={this.handleChange}></input>
          <label htmlFor="email">Email:</label>
          <input className="login__input" type="email" name="email" id="email" required onChange={this.handleChange}></input>
          <label htmlFor="username">Password:</label>
          <input className="login__input" type="password" name="password" id="password" placeholder="8 to 20 characters" minlength="8" maxlength="20" required onChange={this.handleChange}></input>
          <input className="login__submit" type="submit" value="Register"></input>
        </form>
    </div>
    )
  }
}

export default Register;