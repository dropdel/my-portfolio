import * as React from 'react';
import {homeContainer, paragraphs} from './homepage.module.css';
const HomePage = () => {
    return (
        <div className={homeContainer}>
            <h2>Hi, my name is Derrick.</h2>
            <p>I develop things for the web.</p>
            <p className={paragraphs}>
            I specialize in planning, designing and developing
                        software products. Currently, I'm intensely focused 
                        on fleshing out my portfolio, so if you need something
                        done: I'm your guy. 
            </p>
            <p className={paragraphs}>As I've worked with a variety of tools and frameworks,
                relevant to web development, I feel as if I'm capable
                of fulfilling whatever requirements for the web you need.
            </p>
        </div>
    )
}

export default HomePage