import React, { Component } from 'react';
import '../styles/Contact.css'

  class Contact extends Component {

  render() {
    return(
      <div className="contact-container">
        <div className="title">
          <h2>Let's chat</h2>
        </div>
        <div className="contact-intro">
        </div>
      <div className="contact-form">
          <form action="https://formspree.io/contact@ellewilson.nyc" method="POST">
                <input type="text" name="name" placeholder="Name*" className="contact-input" required="required" data-error="Name is required" />
                <input type="email" name="email" placeholder="E-mail*" className="contact-input" required="required" data-error="Email is required" />
                <input type="text" name="phone" placeholder="Contact Number" className="contact-input" />
                <input type="text" name="message" rows="3" placeholder="Message*" className="contact-input" required="required" data-error="Message cannot be empty" />
            <div className="input-button">
              <input type="submit" value="Send" />
            </div>
        </form>
      </div>
    </div>
  )}
}

export default Contact;
