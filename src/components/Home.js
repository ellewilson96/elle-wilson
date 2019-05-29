import React, { Component } from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom'

  class Home extends Component {

  render() {
    return(
      <div className="home-container">
      <div className="home-content">
      <h2>I’m a freelance full-stack web developer & artist.</h2>
      </div>
      <div className="site-button">
        <button>
        <Link to="/">Projects</Link>
        </button>
        <div className="site-button">
          <button>
          <Link to="/art">Artwork</Link>
          </button>
      </div>
      </div>
      </div>
  )}
}

export default Home;
