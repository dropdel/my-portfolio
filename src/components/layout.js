import * as React from 'react'
import Header from './header'
const Layout = ({pageTitle, children}) => {
    return(
        <div>
            <Header pageTitle={pageTitle}></Header>
            {children}
        </div>
    )
}
export default Layout