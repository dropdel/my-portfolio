import * as React from 'react';
import { aboutContainer, aboutStatement, aboutTitle } from './about.module.css';
const About = () => {
  return (
    <div class={aboutContainer} id="about">
      <h2 className={aboutTitle}>About Me</h2>
      <p class={aboutStatement}>
        As a software developer, I specialize in planning, designing and
        building exceptional software products, and offering my experience as a
        service. Currently, I'm intensely focused on building with WordPress and
        React, but I am capable of fulfilling whatever requirements you may
        need, as I work with a variety of different tools and frameworks
        relevant to web development.
      </p>
    </div>
  );
};

export default About;
