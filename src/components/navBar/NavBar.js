import React, { useState } from 'react'
import Logo from "../../assets/icons/NRMALogoWhite.svg";
import Menu from "../../assets/icons/Menu.svg"
import Overlay from '../../views/overlay/Overlay';
import "./NavBar.css"; 

 const NavBar = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };
    return (
        <>
            <div className='nav-theme'>
                <img className="logo" src={Logo} alt='Logo'/>
                <button className='menubutton' onClick={toggleOverlay}>
                    <img src={Menu} alt='Menu'/>
                </button>
                <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
            </div>
        </>
    )
}

export default NavBar