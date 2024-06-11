import React, { useState, useEffect, useRef } from "react";
import Cross from "../../assets/icons/Cross.svg";
import { motion, useTransform, useScroll, useAnimation } from "framer-motion";

import "./pillSectionTest.css";
import "../../assets/styles/button.css";
import PillButton from "../../components/pill/pillButton";

const PillSectionTest = () => {
  const [pillNumber, setPillNumber] = useState(-1);

  const changeOrder = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const ogList = [
    { label: "Helping Guide At-Risk Youth" },
    { label: "Helping to restore a local cricket club " },
    { label: "Helping Ensure Home Safety" },
    { label: "Helping Guide At-Risk Youth" },
    { label: "Helping to restore a local cricket club " },
    { label: "Helping Ensure Home Safety" },
    { label: "Helping to restore a local cricket club " },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
  ];
  const newList = changeOrder(ogList);

  /* MOVING PILL.JS HERE */
  const pillColour = randColour();

    function randColour() {
        let colourNRMA = ["#E0DF6B", "#91BF9E", "#F9AE97", "#FFFFFF"];
        return colourNRMA[Math.floor(Math.random() * colourNRMA.length)];
    }

    // Changing background for the button
    function hoverState(){
        document.documentElement.style.setProperty(`--hoverColor`, `${pillColour}`);

        const style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule(".pillBtn a:hover { color:var(--hoverColor);}");
    }

  /* ANIMATE MIDDLE PILL */
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const buttonWidth = container.children[0].offsetHeight;
    const newActiveIndex = Math.round(scrollLeft / buttonWidth);

    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  // Compute the target scaling value when the target is scrolled into the center
  const scaling = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 1]
  );


  return (
    <div id="Ways_We_Help" className="pill-container">
      <div className="pill-card" id="pill-container">
        {/* Overlay Section */}
        {pillNumber >= 0 && (
          <div className={`pill-overlay`}>
            <h1>What else would a Help Company™ do?</h1>
            <div className="overlay-content">
              <p>No. {pillNumber}</p>

              <PillButton
                Label={newList[pillNumber].label}
                number={pillNumber}
              />

              <p className="pill-overlay-text">
                Helping to restore a local cricket club to its former glory: The
                300-word application that secured an NRMA Insurance grant to
                bring new life to Goolwa Cricket Club.
              </p>

              <button
                className="close-button"
                onClick={() => setPillNumber(-1)}
              >
                <img src={Cross} alt="Close" />
              </button>
            </div>
          </div>
        )}

        {/* Pill Default View */}
        <div
          className={pillNumber < 0 ? "section-pill" : "section-pill-blurred"}
        >
          <h1 className="text-center font-details-b pb-4">
            What else would a Help Company™ do?
          </h1>

          <div className="pill-section" ref={containerRef}>
            {newList.map((item, index) => (              
              <motion.button 
                key={index}
                ref={targetRef} 
                className="pillBtn" 
                onClick={() => setPillNumber(index)} 
                style={{
                  borderColor:pillColour, 
                  backgroundColor: "transparent", 
                  scale: scale
                }}
                disabled={index !== activeIndex}
                animate={controls}
                onMouseEnter={() => hoverState()}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillSectionTest;
