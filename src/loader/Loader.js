import React from "react";
import "./Loader.css";
import NRMAWhiteLogo from "../../assets/icons/NRMALogoWhite.svg";

const Loader = ({ Label, colour, number, setNumber }) => {
  return (
    <div className="nrma-logo-intro">
      <img src={NRMAWhiteLogo} alt="NRMA loading screen" />
    </div>
  );
};

export default Loader;
