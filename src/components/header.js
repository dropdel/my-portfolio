import * as React from 'react'
import NavList from './navlist'
import {header, heading, headingBold} from './header.module.css'

const Header = ({pageTitle}) => {
    return (
        <header className={header}>
            <title>{pageTitle}</title>
            <h1 className={heading}>Derrick Thornton - <span className={headingBold}>Web Developer</span></h1>
            <NavList links='{"/": "Home", "/about": "About Me", "/portfolio": "Portfolio", "/contact": "Contact Me"}'></NavList>
        </header>
    )
}

export default Header