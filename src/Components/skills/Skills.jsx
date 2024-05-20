import React from 'react'
import './Skills.css'
import { getImageUrl } from '../../utils'

const Skills = () => {
  return (
    <div className='skills_container'>
    <h2 className='skills_title'>My Skills</h2>
    <div className='slide'>
    <ul className='skills_list'>
        <li>Postgresql</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Django</li>
        <li>Rest Framework</li>
        <li>Git</li>
        <li>ML</li>
        <li>DL</li>
        <li>Adobe Illustrator</li>
        <li>SQL</li>

        
        <li>Postgresql</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Django</li>
        <li>Rest Framework</li>
        <li>Git</li>
        <li>ML</li>
        <li>DL</li>
        <li>Adobe Illustrator</li>
        <li>SQL</li>

    </ul>
    
    </div>

    <ul className='skills_icons'>
  <li><img src={getImageUrl("skills/css.png")} alt="CSS"/></li>
  <li><img src={getImageUrl("skills/figma.png")} alt="Figma"/></li>
  <li><img src={getImageUrl("skills/html.png")} alt="HTML"/></li>
  <li><img src={getImageUrl("skills/react.png")} alt="React"/></li>
  <li><img src={getImageUrl("skills/django.png")} alt="Django"/></li>
  <li><img src={getImageUrl("skills/git.png")} alt="Git"/></li>
  <li><img src={getImageUrl("skills/postgre.png")} alt="PostgreSQL"/></li>
  <li><img src={getImageUrl("skills/nextjs.png")} alt="Next.js"/></li>
  <li><img src={getImageUrl("skills/tf.png")} alt="TensorFlow"/></li>
  <li><img src={getImageUrl("skills/ai.png")} alt="AI"/></li>
</ul>

    
    </div>
  )
}

export default Skills