
import './App.css'
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

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  )
}

export default App
