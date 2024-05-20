
import React, { useRef } from 'react';
import './App.css'
import emailjs from 'emailjs-com'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/skills/Skills'
import Projects from './Components/Projects/Projects'


function App() {
  
  function displaytext(text){
    const letter = text.split('').map((letter,idx)=>
    <span key={idx} style={{animationDelay: `${0.5*idx}s`}} className='fadein'>
      {letter}
    </span>
    )

  
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2j9xcc', 'template_5cuwtvv', e.target, 'xmDJ0X2oWkZ2d3Tuz')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
      });

    e.target.reset();
  };
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Hero scrollToContact={scrollToContact}></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>

        <section ref={contactRef} className='contact-section'>
        <h2 className='contact-title'>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <label className='subtitle' htmlFor="from_name">Name:</label>
          <input type="text" id="from_name" name="from_name" required />
          
          
          <label className='subtitle'htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      </div>
    </>
  )
}

export default App
