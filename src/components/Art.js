import React, { Component } from 'react';
import one from '../img/art/1.jpg'
import two from '../img/art/2.jpg'
import three from '../img/art/3.jpg'
import four from '../img/art/4.jpg'
import five from '../img/art/5.jpg'

  class Art extends Component {

  render() {
    return(
    <div className="art">
      <div className="piece-container">
        <div className="artwork">
          <img src={one} alt="one" />
        </div>
        <div className="artwork">
          <img src={two} alt="two" />
        </div>
        <div className="artwork">
          <img src={three} alt="three" />
        </div>
        <div className="artwork">
          <img src={four} alt="four" />
        </div>
        <div className="artwork">
          <img src={five} alt="five" />
        </div>
      </div>
    </div>
  )}
}

export default Art;
