import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from "../../assets/icons/NRMALogo.svg";
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
            <Navbar collapseOnSelect expand="md"
            fixed="top"
            className="nav-theme justify-content-between"
            variant="dark">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <button className='iconbutton' onClick={toggleOverlay}>
                    <img src={Menu} alt='Menu'/>
                </button>
                <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
            </Navbar>
        </>
    )
}

export default NavBar