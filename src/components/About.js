import React, { Component } from 'react';
import '../styles/About.css'
import one from '../img/about/1.jpg'
import two from '../img/about/2.jpg'
import three from '../img/about/3.jpg'
import four from '../img/about/4.jpg'
import five from '../img/about/5.jpg'
import six from '../img/about/6.jpg'


  class About extends Component {

  render() {
    return(
      <div className="about-container">
      <div className="title">
        <h2>My Story</h2>
      </div>
        <div className="about-content">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        </div>
    </div>
  )}
}

export default About;
