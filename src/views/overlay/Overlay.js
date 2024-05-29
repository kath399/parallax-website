import React from "react";
import NrmaButton from "../../components/button/NrmaButton";
import Cross from "../../assets/icons/Cross.svg"
import Logo from '../../assets/icons/NRMALogoWhite.svg'
import './overlay.css'

const Overlay = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlayNav">
        <img src={Logo} alt="Logo" className="logoOverlay"/>
        <NrmaButton Type='Primary' Label='Visit NRMA Insurance' />
        <button className="closeButton" onClick={onClose}>
            <img src={Cross} alt='Close' />
        </button>
      </div>
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