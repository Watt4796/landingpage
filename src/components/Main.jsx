import React, { useEffect, useRef } from 'react'

const Main = ({timeline, ease}) => {

  let h2 = useRef(null);
  let pText = useRef(null);
  let btnn = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);

  useEffect(() => {
    timeline.from([h2, pText, btnn], 1, {
      opacity: 0,
      y:'100',
      skewY: 10,
      stagger: {
        amount: .5
      }
    }, "-=1")
  })

  useEffect(() => {
    timeline.from(image1, 1, {
      y:1200,
      ease: ease,
      opacity:0
    })
    .from(image1, 2, {
      scale:1.6,
      ease: ease
    }, "-=1.2");

    timeline.from(image2, 1, {
      y:1200,
      ease: ease,
      opacity:0
    })
    .from(image2, 2, {
      scale:1.6,
      ease: ease
    }, "-=1.5");

    timeline.from(image3, 1, {
      y:1200,
      ease: ease,
      opacity:0
    })
    .from(image3, 2, {
      scale:1.6,
      ease: ease
    }, "-=1.5");
  })

  return (
    <div className='main'>
      <div className="col col1">
        <h2 ref={el => h2 = el}>SubHeading</h2>
        <p ref={el => pText = el}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Adipisci suscipit, labore atque, cum sunt ad
            deleniti nobis quasi voluptatem ipsam error.
            Fugiat quia accusamus officiis dolorem! Illum perspiciatis voluptas blanditiis.
        </p>
        <button type='button' ref={el => btnn = el}>More</button>
      </div>
      <div className="col">
        <div className="card card1" ref={el => image1 = el}></div>
        <div className="card card2" ref={el => image2 = el}></div>
        <div className="card card3" ref={el => image3 = el}></div>
      </div>
    </div>
  )
}

export default Main;
