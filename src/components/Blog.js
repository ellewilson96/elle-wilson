import React, { Component } from 'react';
import big from '../img/blog/big-o.jpeg'
import bone from '../img/blog/post-1.png'
import btwo from '../img/blog/post-2.png'
import bthree from '../img/blog/post-3.png'
import bfour from '../img/blog/post-4.png'
import bfive from '../img/blog/post-6.png'

  class Blog extends Component {

  render() {
    return(
      <div className="blog">
        <div className="post-container">
          <div className="post">
            <div className="post-image">
            <img src={bone} alt="one" />
            </div>
              <div className="post-content">
								<h2>Big O Notation</h2>
								<div className="blog-meta">May 5, 2019</div>
								<p>Sometimes, algorithms use test data that isn’t reflective of a long-term trend. One that might initially be faster than another could scale to be incredibly slow. How does the algorithm's efficiency change as n gets bigger?
								</p>
            <div className="site-button">
              <button>
					         <a href="http://ellewilson.org/big_o_notation" className="read-more">Read More</a>
              </button>
             </div>
          </div>
          </div>
          <div className="post">
          <div className="post-image">
            <img src={btwo} alt="two" />
            </div>
            <div className="post-content">
							<h2>Sorting Lists</h2>
							<div className="blog-meta">May 1, 2019</div>
							<p>The essential question here is: How can we place a given element into our array while keeping the array sorted?
							Here, we will explore the insertion sort method. How efficient, in terms of time complexity, is this method compared to others?</p>
              <div className="site-button">
                <button>
              <a href="http://ellewilson.org/sorting_lists" className="read-more">Read More</a>
                </button>
                </div>
          </div>
          </div>
          <div className="post">
          <div className="post-image">
            <img src={bthree} alt="three" />
            </div>
            <div className="post-content">
							<h2>Searching Arrays with Algorithms</h2>
							<div className="blog-meta">April 26, 2019</div>
							<p>If you have 100,000,000 sorted elements, what would the worst case be for a linear search vs binary search?</p>
              <div className="site-button">
                <button>
            	<a href="http://ellewilson.org/searching_arrays" className="read-more">Read More</a>
              </button>
              </div>
          </div>
          </div>
          <div className="post">
          <div className="post-image">
            <img src={bfour} alt="four" />
            </div>
            <div className="post-content">
							<h2>React Data Flow with Redux</h2>
							<div className="blog-meta">January 2, 2019</div>
							<p>As I am researching more and more about React and Redux, I wanted to share my thoughts and try to explain the data flow within React/Redux applications. This was the topic that caused the most frustration for me, so now that I understand it better, I will try to outline my thoughts in the way that makes the most sense for me.</p>
              <div className="site-button">
                <button>
              <a href="http://ellewilson.org/react_data_flow_with_redux" className="read-more">Read More</a>
              </button>
              </div>
          </div>
          </div>
          <div className="post">
          <div className="post-image">
            <img src={bfive} alt="five" />
            </div>
            <div className="post-content">
								<h2>Asynchronous Actions in React/Redux</h2>
								<div className="blog-meta">January 2, 2019</div>
								<p>“If a handler function returns a value, the promise returned by then gets resolved with the returned value as its value”</p>
                <div className="site-button">
                  <button>
              	<a href="http://ellewilson.org/a_b_c_d" className="read-more">Read More</a>
                </button>
                </div>
            </div>
          </div>
          <div className="post">
          <div className="post-image">
            <img src={big} alt="five" />
            </div>
            <div className="post-content">
  								<h2>React/Redux with a Rails API</h2>
  								<div className="blog-meta">December 19, 2018</div>
  								<p>The React and Redux sections were probably some of the most challenging for me, mostly because I felt the content was quite arbitrary at first, with terms like “store,” “state,” “props,” feeling so foreign. It felt almost impossible to keep up with all of this new information, but I felt I had to keep going and eventually it would click.</p>
                  <div className="site-button">
                    <button>
              		<a href="http://ellewilson.org/react_and_redux_with_a_rails_api" className="read-more">Read More</a>
                  </button>
                </div>
          </div>
        </div>
        </div>
      </div>
  )}
}

export default Blog;
