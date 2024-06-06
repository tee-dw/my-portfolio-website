import React, { useState, useEffect } from 'react'
import "./Hero.css";

const Hero = () => {


        const texts = ["Designer", "Programmer", "Developer"]; // Array of texts to cycle through
        const [currentTextIndex, setCurrentTextIndex] = useState(0); // State to track the current text index
      
        useEffect(() => {
          // Function to cycle through the texts every 3.5 seconds
          const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 3500);
      
          // Clear the interval when component unmounts
          return () => clearInterval(interval);
        }, [texts.length]);



  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <div className='name-box'>
                <p className='name-caption'>Tboltz</p>
            </div>
            <h2>I am a <span className="animated-text">{texts[currentTextIndex]}</span></h2>
            <p>
                I am a passionate frontend-focused fullstack developer and <span>I transform ideas into seamless and visually stunning web solutions</span>
            </p>
            <div className='cv-box'>
                <a href="https://drive.google.com/file/d/1BtqtMcS93udQKXfV1OfbuQEVnEqumle2/view?usp=sharing"><p className='download-cv'>Download CV <span className="material-symbols-outlined">description</span></p></a>
            </div>
        </div>

        <div className="hero-img">
            <div>
                <img src="./assets/images/profile_picture.jpg" alt="" />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/frontend_tools/4.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/frontend_tools/5.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/frontend_tools/6.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero