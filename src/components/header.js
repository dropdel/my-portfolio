import * as React from 'react';
import {
  headerContainer,
  headerOptions,
  icon,
  headerButton,
  myName,
} from './header.module.css';
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
      <h1 className={myName}>{myName}</h1>
      <p>I develop software, for the web.</p>
      <div className={headerOptions}>
        <button className={headerButton}>View Resume</button>
        <FontAwesomeIcon className={icon} icon={faLinkedin} />
        <FontAwesomeIcon className={icon} icon={faGithub} />
      </div>
    </header>
  );
};

export default Header;
