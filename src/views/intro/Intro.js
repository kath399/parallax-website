import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

import ChevronDown from "../../assets/icons/chevron-down-white.svg";

import "../../assets/styles/nrma-scheme.css";
import "./Intro.css";
import "../../assets/styles/button.css";

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  // Refs for slides
  const secondSlide = useRef(null);
  const finalIntro = useRef(null);

  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth", // For smooth scrolling
    });
  };

  function logit() {
    setScrollY(window.scrollY);
    if (
      scrollY === 0 ||
      scrollY >=
        finalIntro.current.offsetTop + finalIntro.current.offsetHeight / 2 - 40
    ) {
      console.log("Hi");
      document.getElementsByClassName("circles")[0].style.display = "none";
    } else {
      document.getElementsByClassName("circles")[0].style.display = "block";
    }
  }

  function changeCircles() {
    console.log(finalIntro.current.offsetTop + " and we are at " + scrollY);
    if (scrollY <= secondSlide.current.offsetTop) {
      document.getElementById("circle1").className = "circle-filled";
      document.getElementById("circle2").className = "circle";
      document.getElementById("circle3").className = "circle";
    } else if (scrollY <= finalIntro.current.offsetTop) {
      document.getElementById("circle2").className = "circle-filled";
      document.getElementById("circle1").className = "circle";
      document.getElementById("circle3").className = "circle";
    } else {
      document.getElementById("circle3").className = "circle-filled";
      document.getElementById("circle1").className = "circle";
      document.getElementById("circle2").className = "circle";
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    changeCircles();

    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <section className="titleMessage first">
        {/* Slide section */}
        <Fade duration={2000}>
          <div className="text">
            We could all use a bit more help these days. Help dealing with the
            rise in extreme weather events. Help doing all those annoying but
            important jobs, like checking your roof or cleaning your gutters.
            Help navigating the not so simple world of insurance. More help with
            everything.
          </div>
        </Fade>
      </section>

      <section className="titleMessage" ref={secondSlide}>
        {/* Slide section */}
        <Fade duration={2000}>
          <div className="text">
            Which is why NRMA Insurance is becoming A Help Company™.
          </div>
        </Fade>
      </section>

      <section className="titleMessage" ref={finalIntro}>
        {/* Slide section */}
        <Fade duration={2000}>
          <div className="text">So what would A Help Company™ do?</div>
        </Fade>
      </section>

      {/* Circles to show positioning */}
      <div className="circles">
        <span className="circle" id="circle1"></span>
        <span className="circle" id="circle2"></span>
        <span className="circle" id="circle3"></span>
      </div>

      {/* Show button if intro complete */}
      <button
        className="skip-content-button"
        onClick={() => scrollDown(section1Ref)}
      >
        <img src={ChevronDown} alt="Skip to content button" />
      </button>

      {/* Show launch message if intro complete */}
      <section ref={section1Ref} className="launchMessage">
        <Fade up duration={2000}>
          It would launch four helpful tools and services.
        </Fade>
      </section>
    </>
  );
};

export default Intro;
