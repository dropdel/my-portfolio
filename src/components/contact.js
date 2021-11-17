import * as React from 'react';
import { centerTitle, formContainer } from './contact.module.css';
const Contact = () => {
  return (
    <div id="contact">
      <h2 className={centerTitle}>Contact Me</h2>
      <form
        className={formContainer}
        action="https://formspree.io/f/mvoddlgo"
        method="POST"
      >
        <label for="name" class="hide">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required=""
          placeholder="name"
        ></input>
        <label for="email" class="hide">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required=""
          placeholder="email"
        ></input>
        <label for="message" class="hide">
          email
        </label>
        <textarea
          id="message"
          placeholder="type your message here"
          required=""
          name="message"
        ></textarea>
        <input id="submit" type="submit" value="Send Message"></input>
      </form>
    </div>
  );
};

export default Contact;
