import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

import ChevronDown from "../../assets/icons/chevron-down-white.svg";
import NRMAWhiteLogo from "../../assets/icons/NRMALogoWhite.svg";

import "../../assets/styles/nrma-scheme.css";
import "./Intro.css";
import "../../assets/styles/button.css";

const Intro = (params) => {
  const [slide, setSlideNumber] = useState(0);
  const [isIntroComplete, setIntroComplete] = useState(false);

  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth", // For smooth scrolling
    });
  };

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("Page scrolled:", window.scrollY);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  function changeSlide() {
    if (slide < slideContent.length - 1) {
      const value = slide + 1;
      setSlideNumber(value);

      if (slide === 2) {
        setIntroComplete(true);
        params.setSlideComplete(true);
      }
    }
  }

  const slideContent = [
    <>
      <div className="nrma-logo-intro">
        <img src={NRMAWhiteLogo} alt="NRMA Logo" />
      </div>
    </>,
    <>
      <Fade>
        We could all use a bit more help these days. Help dealing with the rise
        in extreme weather events. Help doing all those annoying but important
        jobs, like checking your roof or cleaning your gutters. Help navigating
        the not so simple world of insurance. More help with everything.,
      </Fade>
    </>,
    <>
      <Fade>Which is why NRMA Insurance is becoming A Help Company™.</Fade>
    </>,
    <>
      <Fade>
        <div className="text">So what would A Help Company™ do?"</div>
      </Fade>
    </>,
  ];

  return (
    <div id='A_Help_Company' className="intro">
      {/* <div className="nrma-logo-intro">
        <img src={NRMAWhiteLogo} alt="NRMA Logo" />
      </div> */}
      <div
        className="titleMessage"
        onClick={slide <= 3 ? () => changeSlide() : ""}
      >
        {/* Slide section */}
        <Fade duration={2000}>
          <div className="text">{slideContent[slide]}</div>
          <div className={slide ? "circles" : ""}>
            <span className={slide === 1 ? "circle-filled" : "circle"}></span>
            <span className={slide === 2 ? "circle-filled" : "circle"}></span>
            <span className={slide === 3 ? "circle-filled" : "circle"}></span>
          </div>
        </Fade>

        {/* Show button if intro complete */}
        <button
          className={
            isIntroComplete
              ? "skip-content-button"
              : "skip-content-button-hidden"
          }
          onClick={() => scrollDown(section1Ref)}
        >
          <img src={ChevronDown} alt="Skip to content button" />
        </button>
      </div>

      {/* Show launch message if intro complete */}
      {isIntroComplete ? (
        <>
          <div id='Helpful_Tools_And_Services' ref={section1Ref} className="launchMessage">
            <Fade right duration={2000}>
              <div>
                It would launch four helpful
                <br />
                tools and services.
              </div>
            </Fade>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Intro;
