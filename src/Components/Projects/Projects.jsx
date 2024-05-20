import React, { useState } from 'react';
import './Projects.css';
import { getImageUrl } from '../../utils';

const Projects = () => {
  const [onproj, setonproj] = useState(false);
  const [selectedid, setselectedid] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const cardData = [
    {
      id: 1,
      title: "Casa Blanca Times",
      content: "Casa Blanca Times is a responsive Moroccan news website that uses web scraping to gather news from other websites daily. It is developed using Django for the backend and HTML, CSS, and JavaScript for the frontend.",
      images: ['projects/project1/1.png', 'projects/project1/2.png','projects/project1/3.png', 'projects/project1/4.png'] ,
      git_url:'https://github.com/ApeX1112/-casabtimes.com-',
    },
    {
      id: 2,
      title: "Image Map",
      content: "It's a design website that allows users to turn images into responsive ones, as well as design and draw shapes. It is built using React.js and Konva.js.",
      images: ['projects/project2/1.png', 'projects/project2/2.png','projects/project2/3.png', 'projects/project2/4.png'] ,
      git_url:'https://github.com/ApeX1112/IMGMAP',
    },
    {
      id: 5,
      title: "Tanmirt",
      content: "Tanmirt is a django website  to post lost or found items and help others find them (still in progress).",
      images: ['projects/project5/1.png', 'projects/project5/2.png','projects/project5/3.png','projects/project5/4.png'] ,
      git_url:'https://github.com/ApeX1112/tanmirt-',
    },
    {
      id: 4,
      title: "amazon prices tracking website",
      content: "A website to scrape and track Amazon prices, developed with Django (still in progress).",
      images: ['projects/project4/1.png', 'projects/project4/2.png','projects/project4/3.png','projects/project4/4.png'] ,
      git_url:'https://github.com/ApeX1112/AmazonScrap',
    },

    {
      id: 3,
      title: "fitness track",
      content: "A fitness app developed with Kivy and SQL to track daily fitness routines.",
      images: ['projects/project3/1.png', 'projects/project3/2.png','projects/project3/3.png', 'projects/project3/4.png'] ,
      git_url:'https://github.com/ApeX1112/gym-tracking-app',
    }
  ];

  function handleprojectclick(id) {
    setselectedid(id);
    setonproj(true);
  }

  const ProjectDetails = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const scrollLeft = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : project.images.length - 1
      );
    };

    const scrollRight = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < project.images.length-1 ? prevIndex + 1 : 0
      );
    };

    return (
      <>
        <a href={project.git_url}>
        <img  className='giticon' src={getImageUrl("contact/githubIcon.png")} />
        </a>

        <h1 className='panel-project-title'>{project.title}</h1>
        <section className='content-section'>
          <p className='project-content'>{project.content}</p>
        </section>
        <div className="image-carousel">
          <button className="arrow arrow-left" onClick={scrollLeft}>‹</button>
          <div className="image-wrapper" style={{ transform: `translateX(-${(currentImageIndex) * 1150}px)` }}>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={getImageUrl(image)}
                alt={`Project image ${index + 1}`}
              />
            ))}
          </div>
          <button className="arrow arrow-right" onClick={scrollRight}>›</button>
        </div>
        
      </>
    );
  };

  return (
    <>
      <div>
        <div className='projects-container'>
          <h1 className='projects-title'>My projects</h1>
          <div className='grid'>
            {cardData.map((project) => (
              <div className='card' key={project.id} onClick={() => handleprojectclick(project.id)}>
                <h1 className='project-title'>{project.title}</h1>
                <p className='project-content1'>{project.content}</p>
              </div>
            ))}
          </div>
        </div>
        {onproj && (
          <>
          <div className='panel'>
            <img
              className='closeimg'
              src={getImageUrl("nav/closeIcon.png")}
              onClick={() => setonproj(false)}
              alt="Close"
            />
            <div className='pan'>
            <ProjectDetails project={cardData.find((element) => element.id === selectedid)} />
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
