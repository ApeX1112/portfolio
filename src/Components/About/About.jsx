import React from 'react'
import './About.css'
import {getImageUrl} from '../../utils.jsx'

const About = () => {
  return (
    <section className='container1'>
        <h2 className='title1'>About</h2>
        <h2 className='desc'>Hello, my name is Mohamed. I am a 21-year-old Moroccan engineering student at Centrale Lille, one of the top 10 French engineering schools. I am interested in web development and data science.</h2>
        <div className='content1'>
            
            <img src={getImageUrl("about/aboutImage.png")}className='aboutImg'></img>
            <ul className='aboutitems'>
                <h1 className='interests'>my main interests</h1>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/cursorIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Front end development</h3>
                        <p> with React.js and Next.js  </p>
                    </div>
                </li>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/serverIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Back end development</h3>
                        <p> with django  </p>
                    </div>
                </li>
                <li className='aboutitem'>
                    <img src={getImageUrl("about/uiIcon.png")}></img>
                    <div className='aboutitemtext'>
                        <h3> Data Science</h3>
                        <p> with python  </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default About