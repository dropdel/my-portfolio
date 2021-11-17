import * as React from 'react';
import Nav from './nav';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
const Layout = ({ pageTitle, myName }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <Nav></Nav>
      <Header myName={myName}></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </main>
  );
};

export default Layout;
