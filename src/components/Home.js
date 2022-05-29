import React from 'react'
import personal_img from '../images/raul.jpg'
import './Home.scss'
const Home = () => {
  return (
    <React.Fragment>
      <div className='home'>
        <div className="personal">
          <img src={personal_img} alt="foto personal de Raúl" />
        </div>
        <section className='description'>
          <h2>Description</h2>
        </section>
        <section className='projects'>
          <h2>Projects</h2>
        </section>
      </div>
    </React.Fragment>

  )
}

export default Home