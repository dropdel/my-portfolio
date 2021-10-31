import * as React from 'react'
import NavList from './navlist'
import {heading} from './header.module.css'

const Header = ({pageTitle}) => {
    return (
        <header>
            <title>{pageTitle}</title>
            <h1 className={heading}>Derrick Thornton</h1>
            <NavList links='{"/": "Home", "/about": "About Me", "/portfolio": "Portfolio", "/contact": "Contact Me"}'></NavList>
        </header>
    )
}

export default Header