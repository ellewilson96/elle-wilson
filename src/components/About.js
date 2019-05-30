import React, { Component } from 'react';
import '../styles/About.css'
import profile from '../img/profile.png'
import sign from '../img/sign.png'

  class About extends Component {

  render() {
    return(
      <div className="about-container">
      <div className="title">
        <h2>About</h2>
      </div>
        <div className="about-content">
      <p>Elle Wilson has been working in the fashion industry for over 6 years. Originally from England,
          Elle relocated with her family to New Jersey in 2004 before moving to New York City in 2014 to attend the
            Fashion Institute of Technology. There, she obtained a Bachelor of Science degree in Fashion Business Management with a minor in International
              Trade & Marketing and a GPA of 3.75.</p>
      <p>	In December of 2017, her senior year of college, Elle discovered an interest in web development after using
          Salesforce as a tool for clienteling at her previous role at
            Opening Ceremony.
          She began researching educational programs and enrolled in The Flatiron School's
            Full-Stack Software Engineering online immersive. While committing full-time hours every week as both a supervisor and a student,
            Elle worked remotely to complete the program in January of 2019.</p>
          </div>
          <div className="profile-image">
          <img src={profile} alt="me" />
          </div>
          <div className="sign">
          <img src={sign} alt="elle" />
          </div>
    </div>
  )}
}

export default About;
