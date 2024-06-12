import React from "react";
import NrmaButton from "../../components/button/NrmaButton";
import Cross from "../../assets/icons/cross-white2.svg";
import Logo from '../../assets/icons/NRMALogoWhite.svg'
import './overlay.css'

const Overlay = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlayNav">
        <img src={Logo} alt="Logo" className="logoOverlay"/>
        <div style={{display: 'flex'}}>
          <NrmaButton 
            Type='Primary' 
            Label='Visit NRMA Insurance' 
            Size={window.innerWidth < 769 ? "Small" : "Large"}
          />
          <button className="closeButton" onClick={onClose}>
            <img src={Cross} alt='Close' />
          </button>
        </div>
      </div>
      <div className="menuOverlay">
        <a href='#A_Help_Company' onClick={onClose}>A Help Company™</a>
        <br />
        <a href='#Helpful_Tools_And_Services' onClick={onClose}>Helpful tools and services</a>
        <br />
        <a href='#Ways_We_Help' onClick={onClose}>Ways we help</a>
        <br />
        <a href='#contact' onClick={onClose}>Help Lab</a>
        <br />
      </div>
    </div>
  );
};

export default Overlay;