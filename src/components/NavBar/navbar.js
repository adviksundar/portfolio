import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo-transparent-128.png';
import { Link } from 'react-scroll';
import contact from '../../images/contact-32.png';
import menu from '../../images/menu-icon.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <Link to='intro' smooth={true} offset={-100} duration={500} className="logoContainer">
            <img src={logo} alt="Logo" className='logo'/>
        </Link>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='experiencePage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt="Contact Button" className="desktopMenuImg" />Contact Me
        </button>

        {/* Mobile navigation menu */}
        
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='experiencePage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar