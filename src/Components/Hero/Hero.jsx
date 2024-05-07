import React from 'react'
import './Hero.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
            <h2 className='Title'>Hi , I'm Mohamed</h2>
            <h1 className='descr'>welcome to my portfolio </h1>
            <a className='contact'>contact me!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} className='heroimg'>
        </img>
        <div className='topBlur'></div>
    </section>
  )
}

export default Hero