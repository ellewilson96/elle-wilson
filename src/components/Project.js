import React, { Component } from 'react';
import pone from '../img/portfolio/1.png'
import ptwo from '../img/portfolio/2.png'
import pthree from '../img/portfolio/3.png'
import pfour from '../img/portfolio/4.png'
import dream from '../img/portfolio/demogif.gif'

  class Project extends Component {

  render() {
    return(
    <div className="portfolio">
      <div className="project-container">
        <div className="project">
        <a href="https://www.github.com/ellewilson96/dreamember">
          <img src={dream} alt="dream" /></a>
        </div>
        <div className="project">
        <a href="https://www.github.com/ellewilson96/clueless">
          <img src={pone} alt="one" /></a>
        </div>
        <div className="project">
        <a href="https://www.github.com/ellewilson96/align">
          <img src={ptwo} alt="two" /></a>
        </div>
        <div className="project">
        <a href="https://www.github.com/ellewilson96/beauty_junkie">
          <img src={pthree} alt="three" /></a>
        </div>
        <div className="project">
        <a href="https://www.github.com/ellewilson96/rails-portfolio-project">
          <img src={pfour} alt="four" /></a>
        </div>
      </div>
    </div>
  )}
}

export default Project;
