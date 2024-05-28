import React from "react";
import Cross from "../../assets/icons/Cross.svg";
import Logo from '../../assets/icons/NRMALogoWhite.svg';

const Intro = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <div className="intro">
        <p>test</p>
    </div>
  );
};

export default Intro;