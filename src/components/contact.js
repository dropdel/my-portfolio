import * as React from 'react';
import {
  centerTitle,
  formContainer,
  contactContainer,
  submitButton,
  contactTitle,
} from './contact.module.css';
const Contact = () => {
  return (
    <div id="contact" className={contactContainer}>
      <h2 className={centerTitle}>Contact Me</h2>
      <form
        className={formContainer}
        action="https://formspree.io/f/mvoddlgo"
        method="POST"
      >
        <input
          className={submitButton}
          type="text"
          name="name"
          id="name"
          required=""
          placeholder="Your Name"
        ></input>

        <input
          className={submitButton}
          type="email"
          name="email"
          id="email"
          required=""
          placeholder="Your Email"
        ></input>
        <textarea
          className={submitButton}
          id="message"
          placeholder="Type your message here"
          required=""
          name="message"
        ></textarea>
        <input
          className={submitButton}
          id="submit"
          type="submit"
          value="Send Message"
        ></input>
      </form>
    </div>
  );
};

export default Contact;
