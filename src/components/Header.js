import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css'
import icon from '../img/icon.png'

  class Header extends Component {

  render() {
    return(
      <div className="header-container">
        <div className="name">
          <h2>Elle Wilson</h2>
          </div>
        <div className="header-button">
            <button>
            <Link to="/contact">Get in Touch</Link>
              </button>
          </div>
          <div className="mobile-menu-toggle" onClick={this.handleClick}>
            <img src={icon} alt="nav" />
          </div>
          <div className={this.props.shouldHide ? 'hidden' : ''}>
          <div className="main-menu">
              <nav>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/projects">Projects</NavLink></li>
                  <li><NavLink to="/art">Art</NavLink></li>
                  <li><NavLink to="/blog">Blog</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </nav>
              </div>
            </div>
      </div>
  )}
}

export default Header;
