import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

import ChevronDown from "../../assets/icons/chevron-down-white.svg";

import "../../assets/styles/nrma-scheme.css";
import "./Intro.css";
import "../../assets/styles/button.css";

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);
  const [completedIntro, setCompletedIntro] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  console.log("completedIntro", completedIntro);

  console.log("Slide number now ", slideNumber);

  // Refs for slides
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const thirdSlide = useRef(null);

  // Action to scroll to the second landing
  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      top: sectionRef.current.offsetTop,
      behavior: "smooth", // For smooth scrolling
    });
  };

  // Access after DOM renders ref points
  useEffect(() => {
    // Second slide
    const observer3 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const list = document.querySelectorAll(".circle");
          list.forEach((circle, i) => {
            list[i].classList.remove("filled");
          });
          document.querySelectorAll(".circle")[0].classList.toggle("filled");
        }
      },
      {
        threshold: 0.9,
      }
    );
    observer3.observe(firstSlide.current);

    // Second slide
    const observer1 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const list = document.querySelectorAll(".circle");
          list.forEach((circle, i) => {
            list[i].classList.remove("filled");
          });
          document.querySelectorAll(".circle")[1].classList.toggle("filled");
        }
      },
      {
        threshold: 0.9,
      }
    );
    observer1.observe(secondSlide.current);

    // Final slide observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setCompletedIntro(entry.isIntersecting);

        // Remove once met & hide everything above
        if (entry.isIntersecting) {
          // observer.unobserve(entry.target);
          const list = document.querySelectorAll(".circle");
          list.forEach((circle, i) => {
            list[i].classList.remove("filled");
          });
          document.querySelectorAll(".circle")[2].classList.toggle("filled");
        }
      },
      {
        threshold: 0.9,
      }
    );
    observer.observe(thirdSlide.current);

    // function hideEverything() {
    //   // Hide
    // }
  }, []);

  // Hide cirlces if introduction finished
  // if (completedIntro) {
  //   document.getElementsByClassName("circles")[0].style.display = "none";
  // }

  return (
    <>
      <section className="titleMessage" ref={firstSlide}>
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

      <section className="titleMessage" ref={thirdSlide}>
        {/* Slide section */}
        <Fade duration={2000}>
          <div className="text">So what would A Help Company™ do?</div>
        </Fade>
      </section>

      {/* Circles to show positioning */}
      <div className="circles">
        <span className="circle filled" id="circle1"></span>
        <span className="circle" id="circle2"></span>
        <span className="circle" id="circle3"></span>
      </div>

      {/* Show skip navigation button if intro complete */}
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
