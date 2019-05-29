import React, { Component } from 'react';
import '../styles/Footer.css'
import profile from '../img/profile.png'
import { Link } from 'react-router-dom'

  class Footer extends Component {

  render() {
    return(
      <div className="footer-container">
      <div className="profile">
      <img src={profile} alt="me" />
      </div>
      <div className="social-links">
      <ul>
        <li><Link to="https://www.linkedin.com/in/eleanormwilson/">LinkedIn </Link></li>
        <li><Link to="https://www.instagram.com/elle_wilson">Instagram </Link></li>
        <li><Link to="https://www.github.com/ellewilson96/">Github</Link></li>
      </ul>
      </div>
      </div>
  )}
}

export default Footer;
