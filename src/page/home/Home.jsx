import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trusdetBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import { cards, projects } from '../../data.js'
import CatCard from '../../components/catCard/CatCard.jsx'
import ProjectCard from '../../components/projectCard/ProjectCard.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr busines solutions</h1>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Busines</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(project => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  )
}

export default Home