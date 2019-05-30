import React, { Component } from 'react';
import Project from '../components/Project.js'
import '../styles/Project.css'

  class ProjectContainer extends Component {

    render() {
      return(
        <div className="project-container">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="content">
        <p>Elle has worked with a variety of web development languages, frameworks, and libraries in-depth,
						including Ruby, Rails, Sinatra, Javascript, jQuery, SQL, ActiveRecord, Git, HTML, CSS, React, and Redux.
        </p>
        <Project />
        </div>
      </div>
    )}
  }

export default ProjectContainer;
