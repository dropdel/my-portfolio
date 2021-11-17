import * as React from 'react';
import { navigationBar, navigationItem } from './nav.module.css';
const Nav = () => {
  return (
    <nav>
      <ul className={navigationBar}>
        <li>
          <a href="#home" className={navigationItem}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={navigationItem}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className={navigationItem}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className={navigationItem}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
