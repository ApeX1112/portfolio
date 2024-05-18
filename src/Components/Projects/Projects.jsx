import React,{useRef,useEffect, useState} from 'react'
import './Projects.css'
import {getImageUrl} from '../../utils'


const Projects = () => {
    const [onproj,setonproj]=useState(false)
    const [selectedid,setselectedid]=useState(null)
    
    const cardData = [
        { id:1,title: "Card 1", content: "This is the content for Card 1." },
        { id:2,title: "Card 2", content: "This is the content for Card 2." },
        { id:3,title: "Card 3", content: "This is the content for Card 3." },
        { id:4,title: "Card 1", content: "This is the content for Card 1." },
        { id:5,title: "Card 2", content: "This is the content for Card 2." },
        { id:6,title: "Card 3", content: "This is the content for Card 3." },
        
      ];

      function handleprojectclick(id){
        setselectedid(id);
        setonproj(true);
        
      }

      const ProjectDetails=({project})=>{

        return (
          <>
          
          
          </>
        )
      }

      

      return (
        <>
        <div>
        <div  className='projects-container'>
          <h1 className='projects-title'>My projects</h1>
          <div className='grid'>
          
          {cardData.map((project)=>{
            return (
            <>
              <div className='card' onClick={()=>handleprojectclick(project.id)}>
              <h1 className='project-title'>{project.title}</h1>
              
              <p className='project-content'>{project.content}</p>
              </div>
            </>
            )
          })}
          </div>
          
        </div>
        {onproj && (
          <div className='panel'>
            <img className='img' src={getImageUrl("nav/closeIcon.png")} onClick={()=>setonproj(false)}></img>
            <h1 className='panel-project-title'> {cardData.find((element)=>element.id===selectedid).title}</h1>
            <section></section>
          </div>
        )}
        </div>
        </>
      );
}

export default Projects