import * as React from 'react'
import {contactForm, contactOutline} from './contact-form.module.css'
const ContactContent = () => {
    return (
        <form className = {contactForm} action="https://formspree.io/f/mvoddlgo" method="POST">
             <label>
                <p>Email</p>
                <input type="email" name="_replyto" placeholder="Email"></input>
             </label>
            <label>
                <p>Message</p>
                <textarea name="message" placeholder="Message"></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactContent