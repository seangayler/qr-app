import React, { Component } from 'react';
import './Header.css';

import {
  Link
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    /* Display Login and Register buttons if user is not authenticated. 
       Display Logout button if user is authenticated. */
    let loginLinks;
    (!this.props.loggedIn) ? loginLinks = (
      <li className="ul__li">
        <Link to="/login" className="header-nav__ul__li__login-link">Login</Link>
        <Link to="/register" className="header-nav__ul__li__login-link">Register</Link>
      </li>
    ) : loginLinks = (
      <li className="ul__li">
        <button>Logout</button>
      </li>
    );

    return (
      <header>
        <nav className="header-nav">
          <ul className="header-nav__ul">
            <li className="header-nav__ul__li">
              <Link to="/"><h1 className="header-nav__ul__li__header">QR App</h1></Link>
            </li>
            {loginLinks}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;