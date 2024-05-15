import React from "react";
import Cross from "../../assets/icons/Cross.svg"
import Logo from '../../assets/icons/NRMALogoWhite.svg'
import './overlay.css'

const Overlay = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
        <img src={Logo} alt="Logo" className="logoOverlay"/>
        <button className="closeButton" onClick={onClose}>
            <img src={Cross} alt='Close' />
        </button>
        <div className="menuOverlay">
            A Help Company™
            <br />
            Helpful tools and services
            <br />
            Ways we help
            <br />
            Help Lab
            <br />
        </div>
    </div>
  );
};

export default Overlay;