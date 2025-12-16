import React from 'react';
import '../styles/a.css';
import Navigation from './Navigation';

const ProjectsSection = () => {
  return (
    <div className="main-wrapper">
      <Navigation/>
      <div className="projects-container">
        <div className="project" onClick={() => window.open("https://github.com/Alexv1721/Back", "_blank")}>
          <img src="ecm.jpg" className='pimg' alt="Ecommerce"  />
          <div className='des'>
            <h2>Ecommerce Website</h2>
            <p>Developed a fully functional e-commerce platform using the MERN stack. Implemented user authentication, shopping carts, and RESTful APIs with MongoDB.</p>
          </div>
        </div>

   <div className="project"  onClick={() => window.open("https://alexv1721.github.io/game/", "_blank")}>
          <img src="g.webp" className='pimg' alt="Audio Files" />
          <div className='des'>
            <h2>2-player chase game</h2>
            <p> Built a 2-player chase game using HTML5 Canvas with keyboard controls, role selection,
 boundary limits, timer, and sound effects. Roles switch automatically after a catch, and the
 winner is determined based on the fastest catch time</p>
          </div>
        </div>

        <div className="project"   onClick={() => window.open("https://github.com/Alexv1721/notes", "_blank")}

>

          <img src="notes.jpg" className='pimg' alt="Notes App" />
          <div className='des'>
            <h2>Notes App</h2>
            <p>Built a React-based Notes App to create, edit, and delete notes. Utilized state management to handle dynamic interactions and responsive UI.</p>
          </div>
        </div>

        <div className="project" onClick={() => window.open("https://alexv1721.github.io/minhackthon_2.0/", "_blank")} >
          <img src="tr.jpg" className='pimg' alt="Trivia Game" />
          <div className='des'>
            <h2>Trivia Game</h2>
            <p>Interactive game using JS. Features randomization, score tracking, and a timer with a focus on logical game flow and dynamic rendering.</p>
          </div>
        </div>

        <div className="project" onClick={() => window.open("https://github.com/Alexv1721/AlexPortfolio", "_blank")}>
          <img src="port.jpg" className='pimg' alt="Portfolio" />
          <div className='des'>
            <h2>Portfolio Website</h2>
            <p>Responsive personal portfolio using React. Optimized for mobile/desktop with smooth transitions and dynamic project sections.</p>
          </div>
        </div>

     
  
      </div>
    </div>
  );
};

export default ProjectsSection;