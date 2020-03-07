import React, { Component } from 'react';
import './Header.css';

import {
  Link
} from "react-router-dom";

class Header extends Component {
  
  render() {
    /* Display Login and Register buttons if user is not authenticated. 
       Display Logout button if user is authenticated. */
    let loginLinks;
    (!this.props.loggedIn) ? loginLinks = (
      <li className="navbar-list__links navbar-list__links--login">
        <Link to="/login">Login &#8617;	</Link>
        <Link to="/register">Register &#8617;	</Link>
      </li>
    ) : loginLinks = (
      <li className="navbar-list__links navbar-list__links--logout">
        <Link to="/">Logout &#8618; </Link>
      </li>
    );

    return (
      <header>
        <nav>
          <ul className="navbar-list">
            <li className="navbar-list__brand">
              <Link to="/"><h1 className="navbar-list__brand__heading">QR App</h1></Link>
              <p className="navbar-list__brand__slogan">Scan. Track.</p>
            </li>
            {loginLinks}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;