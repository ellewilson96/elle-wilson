import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css'

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
  )}
}

export default Header;
