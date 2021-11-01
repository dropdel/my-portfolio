import * as React from 'react'
import {contactForm} from './contact-form.module.css'
const ContactContent = () => {
    return (
        <form className = {contactForm} action="https://formspree.io/f/mvoddlgo" method="POST">
             <label>
                 Your email:
                <input type="email" name="_replyto"></input>
             </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
            </form>
    )
}

export default ContactContent