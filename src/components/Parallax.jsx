import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0", "100%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  return (
    <div className='parallax' ref={ref}>
        <motion.h1 className='parallax-heading' style={{y: textY}}>
            Want to Connect?
        </motion.h1>

        <motion.div className='parallax-img p_img1' style={{y: backgroundY}}></motion.div>
        <div className='parallax-img p_img2'></div>
    </div>
  )
}

export default Parallax;
