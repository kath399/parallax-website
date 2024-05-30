import React from "react";
import { Fade } from "react-reveal";
import "./Loader.css";
import NRMAWhiteLogo from "../assets/icons/NRMALogoWhite.svg";

const Loader = ({ Label, colour, number, setNumber }) => {
  return (
    <div className="nrma-logo-intro">
      <Fade duration={2000}>
        <img src={NRMAWhiteLogo} alt="NRMA loading screen" />
      </Fade>
    </div>
  );
};

export default Loader;
