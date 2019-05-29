import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


  class Home extends Component {

  render() {
    return(
      <div id="root">
      <div className="home-container">
      <div className="profile">
      // link to profile image
      </div>
      <div className="home-content">
      <h2>I’m a freelance full-stack web developer & artist.</h2>
      </div>
      <div className="site-button">
        <button>
        <Link to="/">Projects</Link>
        </button>
        <div className="site-button">
          <button>
          <Link to="/art">Artwork</Link>
          </button>
      </div>
      </div>
      </div>
    </div>
  )}
}

export default Home;



	// <section class="intro-section">
	// 	<div class="container text-center">
	// 		<div class="row">
	// 			<div class="profile">
	// 				<img src="./img/profile.png">
	// 			</div>
	// 			<div class="col-xl-10 offset-xl-1">
	// 				<h2 class="section-title">I’m a freelance <br><span>full-stack web developer</span> <br>& <span>artist.</span></h2>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>
  //
	// <section class="portfolio-section">
	// 	<div class="container text-center">
	// 	<a href="work.html" class="site-btn text-center">Projects</a>
	// 	<a href="art.html" class="site-btn text-center">Artwork</a>
	// 	</div>
	// </section>
