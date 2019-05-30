import React, { Component } from 'react';
import Blog from '../components/Blog.js'
import '../styles/Blog.css'


  class BlogContainer extends Component {

  render() {
    return(
      <div className="blog-container">
      <div className="title">
        <h2>Latest Posts</h2>
      </div>
      <div className="content">
      <p></p>
      <Blog />
      </div>
    </div>
  )}
}

export default BlogContainer;
