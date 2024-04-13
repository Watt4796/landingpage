import React, { useEffect } from 'react'
import { HiMail, HiOutlineCalendar, HiOutlineDatabase  } from 'react-icons/hi';
import Img from '../images/expertiseimg.jpg'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {

  useEffect(() => {
    gsap.from(".ex-card", {
      duration: 1,
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -100 : 100), 
      stagger: 0.5, 
      scrollTrigger: {
        trigger: ".ex-card ",
        start: "top 80%", 
        toggleActions: "play none none reverse",
      }
    });
  }, []);


  return (
    <div className='expertise'>
      <div className="ex-container">
        <div className="ex-card-img">
            <h2>Our Expertise</h2>
            <img src={Img} alt="" />
        </div>
        <div className="ex-details">

            <div className="ex-card">
                <div className="icon"><HiMail /></div>
                <div className="ex-details-card">
                        <h2>lorem</h2>
                        <p>lorem lorem lorem lorem puwefybjdksh dsfuyybkdsfhh</p>
                </div>
            </div>
            <div className="ex-card">
                <div className="icon"><HiOutlineCalendar /></div>
                <div className="ex-details-card">
                        <h2>lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, asperiores itaque. Perferendis maxime repudiandae ducimus, nulla libero similique itaque voluptates corporis. Cum harum sapiente reiciendis repellendus ea sunt asperiores in.</p>
                </div>
            </div>
            <div className="ex-card">
                <div className="icon"><HiOutlineDatabase /></div>
                <div className="ex-details-card">
                        <h2>lorem</h2>
                        <p>lorem lorem lorem lorem puwefybjdksh dsfuyybkdsfhh</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise;
