import * as React from 'react';
import {
  portfolioButtons,
  centerTitle,
  portfolioContainer,
} from './portfolio.module.css';
// Needs to pull data from a project
// configuration file.
const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className={centerTitle}>Portfolio</h2>
      <div className={portfolioContainer}>
        <figure>
          <img src="" height="250" width="250" />
          <figcaption className={portfolioButtons}>
            <button>Live</button>
            <button>Code</button>
          </figcaption>
        </figure>
        <figure>
          <img src="" height="250" width="250" />
          <figcaption className={portfolioButtons}>
            <button>Live</button>
            <button>Code</button>
          </figcaption>
        </figure>
        <figure>
          <img src="" height="250" width="250" />
          <figcaption className={portfolioButtons}>
            <button>Live</button>
            <button>Code</button>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Portfolio;
