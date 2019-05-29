import React, { Component } from 'react';
import '../styles/Footer.css'
import profile from '../img/profile.png'

  class Footer extends Component {

  render() {
    return(
      <div className="footer-container">
      <div className="profile">
      <img src={profile} alt="me" />
      </div>
      <div className="social-links">
      <ul>
        <li><a href="https://www.linkedin.com/in/eleanormwilson">LinkedIn </a></li>
        <li><a href="https://www.instagram.com/elle_wilson">Instagram </a></li>
        <li><a href="https://www.github.com/ellewilson96">Github</a></li>
      </ul>
      </div>
      </div>
  )}
}

export default Footer;
