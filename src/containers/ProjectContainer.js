import React, { Component } from 'react';
import '../App.css'

  class ProjectContainer extends Component {

    render() {
      return(
        <div className="project-container">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="content">
        <p>Projects will be loaded via local database</p>
        </div>
      </div>
    )}
  }

export default ProjectContainer;
