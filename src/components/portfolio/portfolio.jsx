import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
  id: 2,
  image: IMG2,
  title: 'Charts templates & infographics in Figma',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/search/charts-templates-infographics-in-figma'
  },
  {
  id: 3,
  image: IMG3,
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/search/figma-dashboard-ui-kit-for-data-design-web-apps'
  },
  {
  id: 4,
  image: IMG4,
  title: 'Maintaining tasks and tracking progress',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/search/maintaining-tasks-and-tracking-progress'
  },
  {
  id: 5,
  image: IMG5,
  title: 'Charts templates & infographics in Figma',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/search/charts-templates-infographics-in-figma'
  },
  {
  id: 6,
  image: IMG6,
  title: 'Charts templates & infographics in Figma',
  github: 'https://github.com/Vandana19singh',
  demo: 'https://dribbble.com/search/charts-templates-infographics-in-figma'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key = {id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
           <div className="portfolio_item-cta">
           <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_b
            ' >Live Demo</a>
           </div>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default portfolio