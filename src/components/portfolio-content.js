import * as React from 'react'
import {portfolioContainer, portfolioImg, portfolioBtns} from './portfolio-content.module.css'
const PortfolioContent = () => {
    const singleProject = (
        <div className={portfolioContainer}>
            <div className={portfolioImg}>img</div>
            <div className={portfolioBtns}><button>Code</button><button>Live</button><button>Docs</button></div>
        </div>)
    return (
        <div>
            {singleProject}
        </div>
    )
}
export default PortfolioContent