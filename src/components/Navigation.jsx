import React from 'react'
import '../styles/nav.css'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const nav = useNavigate()
  
  return (
    <div className='navigation-container'>
      <div className='nav-logo' onClick={() => nav('/')}>
        ALEX<span style={{display:"inline"}}> .V</span>
      </div>
      <div className='nav-links'>
        <div className='nav' onClick={() => nav('/')}>Home</div>
        <div className='nav' onClick={() => nav('/project')}>Projects</div>
        <div className='nav' onClick={() => nav('/resume')}>Resume</div>
        <div className='nav' onClick={() => nav('/contact')}>Contact</div>
      </div>
    </div>
  )
}

export default Navigation