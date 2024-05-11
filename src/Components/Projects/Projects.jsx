import React,{useRef,useEffect} from 'react'
import './Projects.css'


const Projects = () => {
    const cardData = [
        { title: "Card 1", content: "This is the content for Card 1." },
        { title: "Card 2", content: "This is the content for Card 2." },
        { title: "Card 3", content: "This is the content for Card 3." },
        { title: "Card 1", content: "This is the content for Card 1." },
        { title: "Card 2", content: "This is the content for Card 2." },
        { title: "Card 3", content: "This is the content for Card 3." },
        { title: "Card 1", content: "This is the content for Card 1." },
        { title: "Card 2", content: "This is the content for Card 2." },
        { title: "Card 3", content: "This is the content for Card 3." },
      ];

      

      return (
        <div  className='projects-container'>
          <h1 className='projects-title'>My projects</h1>
          <div className='grid'>
          
          {cardData.map((project)=>{
            return (
            <>
              <div className='card'>
              <h1 className='project-title'>{project.title}</h1>
              
              <p className='project-content'>{project.content}</p>
              </div>
            </>
            )
          })}
          </div>
        </div>
      );
}

export default Projects