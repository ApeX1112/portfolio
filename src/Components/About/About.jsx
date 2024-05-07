import React from 'react'
import './About.css'
import {getImageUrl} from '../../utils.jsx'

const About = () => {
  return (
    <section className='container1'>
        <h2 className='title1'>About</h2>
        <div className='content1'>
            <img src={getImageUrl("about/aboutImage.png")}className='aboutImg'></img>
            <ul className='aboutitems'>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/cursorIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Front end development</h3>
                        <p> description </p>
                    </div>
                </li>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/serverIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Back end development</h3>
                        <p> description </p>
                    </div>
                </li>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/uiIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Data Science</h3>
                        <p> description </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default About