import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import ChevronDown from "../../assets/icons/chevron-down-white.svg";

import "../../assets/styles/nrma-scheme.css";
import "./Intro.css";
import "../../assets/styles/button.css";

const Intro = (params) => {
  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      top: sectionRef.current.offsetTop,
      block: "start",
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <div id="A_Help_Company" className="intro">
      <div className="titleMessage">
        <Fade up direction="up" duration={2000} triggerOnce="true">
          <div className="text">
            We could all use a bit more help these days. Help dealing with the
            rise in extreme weather events. Help doing all those annoying but
            important jobs, like checking your roof or cleaning your gutters.
            Help navigating the not so simple world of insurance. More help with
            everything.<br></br>
            <br></br>So what would A Help Company™ do?
          </div>
        </Fade>

        {/* Show button if intro complete */}
        <button
          className="skip-content-button"
          onClick={() => scrollDown(section1Ref)}
        >
          <img src={ChevronDown} alt="Skip to content button" />
        </button>
      </div>

      {/* Show launch message if intro complete */}
      <div
        id="Helpful_Tools_And_Services"
        ref={section1Ref}
        className="launchMessage"
      >
        <Fade duration={2000} triggerOnce="true">
          <div>
            It would launch four helpful
            <br />
            tools and services.
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
