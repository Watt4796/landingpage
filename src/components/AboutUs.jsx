import React, {useRef, useEffect} from 'react'
import AboutUsImg from '../images/aboutus.jpg'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutUs = () => {

  const ref = useRef();
  const h2Ref = useRef();
  const imgRef = useRef();
  const p1Ref = useRef();
  const p2Ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(h2Ref.current, { y: -100, opacity: 0, duration: 1 })
      .from(imgRef.current, { x: -100, opacity: 0, duration: 1 }, '-=0.5')
      .from(p1Ref.current, { x: 100, opacity: 0, duration: 1 }, '-=0.5')
      .from(p2Ref.current, { y: 100, opacity: 0, duration: 1 }, '-=0.5');

  }, []);

  return (
    <div ref={ref} className="about-container">
        <h2 ref={h2Ref}>About Us</h2>
        <img ref={imgRef} src={AboutUsImg} alt="" />
        <p ref={p1Ref} className='p1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos sapiente distinctio facilis odio nulla ut dolorem aut quaerat! 
            Recusandae nostrum neque architecto ipsam temporibus reiciendis corporis
            doloremque nesciunt perspiciatis molestias!
        </p>
        <p ref={p2Ref} className='p2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque veniam non ipsa sequi. Tempora quis quibusdam
             facilis quo nulla maxime, dolores itaque neque culpa 
             accusantium consequuntur sit unde perspiciatis quam?
        </p>
    </div>
  )
}

export default AboutUs;
