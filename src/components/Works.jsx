import React, { useEffect } from 'react'
import { HiCode, HiClock, HiCloud } from 'react-icons/hi'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Works = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".work-card", {
      scrollTrigger: {
        trigger: ".container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 0,
      duration: 1,
      y: 50
    });
    
  }, []);

  return (
    <div className='work'>
      <h2 >How It Works</h2>
      <div className="container">
        <div className="work-card">
          <div className="work-icon"><HiCode /></div>
          <h3>Working</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="work-card">
        <div className="work-icon"><HiClock /></div>
          <h3>Working</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="work-card">
        <div className="work-icon"><HiCloud /></div>
          <h3>Working</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Works;
