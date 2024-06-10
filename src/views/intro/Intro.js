import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

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
      behavior: "smooth",
    });
  };

  return (
    <div id="A_Help_Company" className="intro">
      <section className="introMessage">
        <Fade direction="up" duration={2000} triggerOnce="true">
          <p className="text">
            We could all use a bit more help these days. Help dealing with the
            rise in extreme weather events. Help doing all those annoying but
            important jobs, like checking your roof or cleaning your gutters.
            Help navigating the not so simple world of insurance. More help with
            everything. Which is why NRMA Insurance is becoming A Help Company™.
            <br></br>
            <br></br>
            So what would A Help Company™ do?
          </p>
        </Fade>

        <button
          className="chevron-down-button"
          onClick={() => scrollDown(section1Ref)}
          type="button"
        >
          <img
            src={ChevronDown}
            alt="Go to Helpful Tools and Services button"
          />
        </button>
      </section>

      <section
        id="Helpful_Tools_And_Services"
        ref={section1Ref}
        className="mainSectionHeader"
      >
        <Fade duration={2000} triggerOnce="true">
          <div>
            A Help Company™ would launch four helpful tools and services.​
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Intro;
