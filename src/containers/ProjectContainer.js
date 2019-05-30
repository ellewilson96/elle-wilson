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
        <Project />
        </div>
      </div>
    )}
  }

export default ProjectContainer;
