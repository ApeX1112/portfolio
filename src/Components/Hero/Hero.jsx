import React, { useEffect, useState } from 'react'
import './Hero.css'
import { getImageUrl } from '../../utils'

const text1="Hi , I'm Mohamed"
const text2="welcome to my portfolio"





const Hero = () => {
  const [text,settext]=useState(text1)
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Clear previous timeouts and intervals
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(displayText => displayText + text[index]);
        setIndex(index => index + 1);
      } else {
        clearInterval(intervalId);
        setDisplayText('');
        setIndex(0);
        settext(txt=>{
          if(txt===text1) return text2;
          else return text1;
        })

         // Stop the interval when all letters are displayed
      }
    }, 500); // Display each letter after 500ms

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [index, text]); 
  return (
    <section className='container'>
        <div className='content'>
            <h2 className='Title'>{displayText}</h2>
            
            <span className='descr'>{text2}</span>
            <a className='contact'>contasct me!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} className='heroimg'>
        </img>
        <div className='topBlur'></div>
    </section>
  )
}

export default Hero