import * as React from 'react';
import {homeContainer, paragraphs} from './homepage.module.css';
const AboutContent = () => {
    return (
        <div className={homeContainer}>
            <p className={paragraphs}>Hello again. Let me tell you a little bit more about myself. </p>
            <p className={paragraphs}>So, my name is Derrick and I attended Goldsmiths University of London , where I obtained my Foundation degree in Computing, which kickstarted my adventure into the field of software engineering.</p>
            <p className={paragraphs}>Other than coding, in my free time, I am currently learning the Russian language, reading about geopolitics and accessability design, and, sometimes, taking a break and working on personal projects. </p>
        </div>
    );
}

export default AboutContent