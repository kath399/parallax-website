import React, { useState, useEffect } from 'react'
import LogoWhite from "../../assets/icons/NRMALogoWhite.svg";
import Logo from "../../assets/icons/NRMALogo.svg";
import Menu from "../../assets/icons/Menu2.svg";
import Menu3 from "../../assets/icons/Menu3.svg";
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
                <a href='#A_Help_Company' className={scrolled ? 'navs-link' : 'nav-link'}>A Help Company™</a> 
                <a href='#Helpful_Tools_And_Services' className={scrolled ? 'navs-link' : 'nav-link'}>Helpful tools and services</a>  
                <a href='#contact' className={scrolled ? 'navs-link' : 'nav-link'}>Ways we help</a>
                <a href='' className={scrolled ? 'navs-link' : 'nav-link'}>Help Lab</a>
            </div>
            <div className='navBtn'>
                <NrmaButton Type={scrolled ? 'Secondary' : 'Primary'} Label={'Visit NRMA Insurance'}/>
            </div>
            <button 
                className='menubutton' 
                style={{
                    backgroundColor: scrolled && 'white',
                    color: scrolled && '#010C66',
                    border: scrolled && '1px solid #010C66'
                }}
                onClick={toggleOverlay}>
                <img src={scrolled ? Menu3 : Menu} alt='Menu'/>
            </button>
            <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </div>
    )
}

export default NavBar