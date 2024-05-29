import React, { useState, useEffect } from 'react'
import LogoWhite from "../../assets/icons/NRMALogoWhite.svg";
import Logo from "../../assets/icons/NRMALogo.svg";
import Menu from "../../assets/icons/Menu.svg";
import NrmaButton from '../button/NrmaButton';
import Overlay from '../../views/overlay/Overlay';
import "./NavBar.css"; 

 const NavBar = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 50;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    return (
        <div 
            className='navBar' 
            style={{
                backgroundColor: scrolled && 'white',
                color: scrolled && '#010C66',
                height: scrolled && '80px'
            }}
        >
            <img className="logo" src={scrolled ? Logo : LogoWhite} alt='Logo'/>
            <div className='navHeading'>
                A Help Company™ &nbsp;&nbsp;&nbsp; Helpful tools and services  
                &nbsp;&nbsp;&nbsp; Ways we help &nbsp;&nbsp;&nbsp; Help Lab &nbsp;&nbsp;&nbsp;
            </div>
            <NrmaButton Type={scrolled ? '' : 'Primary'} Label={'Visit NRMA Insurace'}/>
            <button className='menubutton' onClick={toggleOverlay}>
                <img src={Menu} alt='Menu'/>
            </button>
            <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </div>
    )
}

export default NavBar