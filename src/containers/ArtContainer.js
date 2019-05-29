import React, { Component } from 'react';
import '../App.css'

  class ArtContainer extends Component {

  render() {
    return(
      <div className="art-container">
      <div className="title">
        <h2>Artwork</h2>
      </div>
      <div className="content">
      <p>Elle has been drawing and painting for almost ten years. From oil paint, to charcoal, to gouache, Elle enjoys creating art
                  with a variety of mediums and techniques.
        </p>
        <p>Artwork will be loaded via local database</p>
      </div>
    </div>
  )}
}

export default ArtContainer;
