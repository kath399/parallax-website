import React, { useState, useEffect, useRef } from "react";
import Cross from "../../assets/icons/Cross.svg";
import { motion, useTransform, useScroll } from "framer-motion";

import "./pillSection.css";
import "../../components/pill/pillButton.css"
import "../../assets/styles/button.css";
import PillButton from "../../components/pill/pillButton";

import ChevronDown from "../../assets/icons/chevron-down-white.svg";

const PillSection = () => {
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

  const containerRef = useRef(null);
  const targetRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  /* FIND MIDDLE PILL */
  const [middlePill, setMiddlePill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerMiddle = container.clientHeight / 2;
      const containerTop = container.scrollTop;

      const pills = container.getElementsByClassName('pillBtn');

      let closestPill = null;
      let closestDistance = Infinity;

      Array.from(pills).forEach(pill => {
        const pillRect = pill.getBoundingClientRect();
        const pillTop = pillRect.top + containerTop - container.offsetTop;
        const pillMiddle = pillTop + pillRect.height / 2;

        const distance = Math.abs(pillMiddle - (containerTop + containerMiddle));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPill = pill;
        }
      });

      setMiddlePill(closestPill);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* PILL BUTTON */
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

          <div className="pill-wrapper">
            <div id='pill-scroll' className="pill-section" ref={containerRef}>
              {newList.map((item, index) => (
                <motion.button 
                  ref={targetRefs[index]} 
                  className="pillBtn" 
                  onClick={() => setPillNumber(index)} 
                  style={{borderColor:pillColour, backgroundColor: "transparent", scale: scale}}
                  onMouseEnter={() => hoverState()}
                >
                  {item.label}
                </motion.button>
              ))}
              <div>
                {middlePill && (middlePill)}
              </div>
            </div>
            
            <div>
              <button 
                className='chevron-down-button'
                style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '55%',
                }}
              >
                <img 
                  src={ChevronDown} 
                  alt='Up Chevron Control'
                  className="chevronUp"
                />
              </button>
              <button 
                className='chevron-down-button'
                style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '45%'
                }}
              >
                <img src={ChevronDown} alt='Down Chevron Control'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillSection;
