import React from 'react'
import '../styles/resume.css'
import Navigation from './Navigation';

const Resume = () => {
 
  const resumePdf = "Alex_Resume (2).pdf";

  return (
    <div className="resume-page-wrapper">
      <Navigation/>
      <div className="resume">
        <div className="resume-content">
          <div className="pdf-viewer-container">
            <iframe 
              src={`${resumePdf}#toolbar=0`} 
              title="Resume Preview"
              className="pdf-view"
            ></iframe>
          </div>

          <div className='a'>
            <a href={resumePdf} download='alex_resume.pdf'>
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume