import React, { Component } from 'react';
import '../App.css'

  class BlogContainer extends Component {

  render() {
    return(
      <div className="blog-container">
      <div className="title">
        <h2>Latest Posts</h2>
      </div>
      <div className="content">
      <p>Posts will be loaded via local database</p>
      </div>
    </div>
  )}
}

export default BlogContainer;
