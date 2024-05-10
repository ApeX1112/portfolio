import React,{useRef,useEffect} from 'react'
import './Projects.css'


const Projects = () => {
    const cardData = [
        { title: "Card 1", content: "This is the content for Card 1." },
        { title: "Card 2", content: "This is the content for Card 2." },
        { title: "Card 3", content: "This is the content for Card 3." },
      ];

      const containerRef = useRef(null);
      useEffect(() => {
        const container = containerRef.current;
        if (!container) return; 
      
        const handleScroll = () => {
          const { scrollTop } = container;
          const cards = container.querySelectorAll('.card');
        
          cards.forEach((card, index) => {
            if (scrollTop > (index * 100)) {
              card.style.transform = `translateY(${scrollTop - index * 100}px)`;
              card.style.zIndex = 1000 - index;
            }
          });
        };
        
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <div ref={containerRef} className='projects-container'>
          <h1 className='projects-title'>My projects</h1>
          {cardData.map((card, index) => (
            <div className='card' key={index}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      );
}

export default Projects