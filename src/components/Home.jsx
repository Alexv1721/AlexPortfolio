import React from 'react'
import Navigation from './Navigation'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='n'>
      <Navigation/>
            
      <div className='home-section'>
         <div className="pro"></div> 
        <div className="intro">
          <p className='intro-text'>
           Full Stack Developer (MERN) | Project-Driven Learner
Built real-world applications using the MERN stack, including an e-commerce platform. Strong in React UI development, REST APIs, and database design. Actively seeking opportunities to contribute and grow. <span>~ Alex V</span>
          </p>
        </div>

 
      </div>
    </div>
  )
}

export default Home