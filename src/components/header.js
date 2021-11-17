import * as React from 'react';
import { headerContainer } from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faLinkedin,
  faGithub,
  faGit,
} from '@fortawesome/free-brands-svg-icons';

const Header = ({ myName }) => {
  return (
    <header className={headerContainer} id="home">
      <p>Welcome, my name is</p>
      <h1>{myName}</h1>
      <p>I develop software, for the web.</p>
      <div>
        <button>View Resume</button>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </header>
  );
};

export default Header;
