import * as React from 'react'
import Header from './header'
import HomePage from './homepage'

import {container} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return(
        <div className={container}>
            <Header pageTitle={pageTitle}></Header>
            {children}
        </div>
    )
}
export default Layout