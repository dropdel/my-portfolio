import * as React from 'react'
import { Link } from 'gatsby'

const Header = ({pageTitle, children}) => {
    return (
        <header>
            <title>{pageTitle}</title>
            <h1>Derrick Thornton</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
            </ul>
            {children}
        </header>
    )
}

export default Header