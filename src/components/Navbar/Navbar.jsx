import React, { useState } from 'react';
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <div>
                <nav className="nav-wrapper">
                    <div className='nav-content'>
                        <a href="#"><img className="mylogo" src="./assets/images/tboltz_logo_white.png" alt="" /></a>
                        <ul className="">
                            <li>
                                <a className="menu-item" href="#">Home</a>
                            </li>
                            <li>
                                <a className="menu-item" href="#skills">Skills</a>
                            </li>
                            <li>
                                <a className="menu-item" href="#experience">Work Experience</a>
                            </li>
                            <li>
                                <a className="menu-item" href="#contact">Contact Me</a>
                            </li>

                            <a href="#contact"><button className='contact-btn'>
                                Hire Me
                            </button></a>
                        </ul>
                        <button className="menu-btn" onClick={toggleMenu}>
                            <span className={"material-symbols-outlined"}>
                            {openMenu ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
