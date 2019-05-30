import React, { Component } from 'react';
import '../styles/Art.css'
import Art from '../components/Art.js'

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
        <Art />
      </div>
    </div>
  )}
}

export default ArtContainer;
