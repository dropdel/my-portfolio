import * as React from 'react'
import { Link } from 'gatsby'
import NavList from './navlist'

const Header = ({pageTitle, children}) => {
    return (
        <header>
            <title>{pageTitle}</title>
            <h1>Derrick Thornton</h1>
            <NavList links='{"/": "Home", "/about": "About Me"}'></NavList>
            {children}
        </header>
    )
}

export default Header