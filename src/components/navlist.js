import * as React from 'react'
import { Link } from 'gatsby'

/* 
    Navigation List for use in the header.
*/

const NavList = (props) => {   
    // Get the paths and Link text from the props. Might be a JSON configuration file later.
    // Convert it from a string to an object.
    // Make it into an array containing key-value arrays. 
    const pathsAndLinkTextObj = JSON.parse(props.links);
    const listItems = Object.entries(pathsAndLinkTextObj).map(
        (pathAndText) => {
            return (
            <li>
                <Link to={pathAndText[0]}>{pathAndText[1]}</Link>
            </li>
            )
        }
    )
    return (<ul>{listItems}</ul>)
}

export default NavList;