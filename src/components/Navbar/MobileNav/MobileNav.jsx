import React from 'react'
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img className='mylogo' src="./assets/images/tboltz_logo_white.png" alt="" />

                <ul>
                    <li>
                        <a className="menu-item" href="">Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item" href="">Contact Me</a>
                    </li>
                </ul>
                <a href="#"><button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button></a>
            </div>

        </div>
    </>
  )
}

export default MobileNav;
