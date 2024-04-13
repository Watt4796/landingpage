import React, { useEffect, useRef } from 'react'
import logo from '../images/logo.jpg'
import { HiChevronDown } from "react-icons/hi";

const Header = ({timeline, easee}) => {

    let logoo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    let menu_item4 = useRef(null);
    let menu_item5 = useRef(null);

    useEffect(() => {
        timeline.from(logoo, 1, {
            opacity:0,
            y:100
        });

        timeline.from([menu_item1,menu_item2,menu_item3,menu_item4, menu_item5], 2, {
            opacity: 0,
            y: -200,
            stagger: {
                amount: .4
            },
            ease: easee
        })
    })
  return (
    <div className='header'>
        <div className="logo" ref={el => logoo = el}>
            <img src={logo} alt="" />
        </div>
        <nav className='navigation'>
            <ul>
                <li><a href="/" ref={el => menu_item1 = el}>Home</a></li>
                <li><a href="/" ref={el => menu_item2 = el}>Services</a></li>
                <li><a href="/" ref={el => menu_item3 = el}>About</a></li>
                <li><a href="/" ref={el => menu_item4 = el}>Contact</a></li>
            </ul>
        </nav>
        <div className="btn">
            <button type='button' ref={el => menu_item5 = el}>Login</button>
        </div>
    </div>
  )
}

export default Header;
