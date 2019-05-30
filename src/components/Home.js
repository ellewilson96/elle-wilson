import React, { Component } from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom'

  class Home extends Component {

  render() {
    return(
      <div className="home-container">
      <div className="title">
        <h2>Welcome</h2>
      </div>
      <div className="content">
      <h2>I’m a freelance full-stack web developer & artist.</h2>
      </div>
      <div className="home-buttons">
      <div className="site-button">
        <button>
        <Link to="/projects">Projects</Link>
        </button>
        <div className="site-button">
          <button>
          <Link to="/art">Artwork</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default Home;
