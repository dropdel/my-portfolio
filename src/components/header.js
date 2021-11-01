import * as React from 'react'
import NavList from './navlist'

const Header = ({pageTitle}) => {
    return (
        <header>
            <title>{pageTitle}</title>
            <h1>Derrick Thornton</h1>
            <NavList links='{"/": "Home", "/about": "About Me", "/portfolio": "Portfolio", "/contact": "Contact Me"}'></NavList>
        </header>
    )
}

export default Header