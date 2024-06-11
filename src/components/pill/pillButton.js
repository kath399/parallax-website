import React from "react";
import "./pillButton.css";
import { motion, useTransform, useScroll } from "framer-motion";

const PillButton = ({Label, colour, number, setNumber, ref, animate}) => {

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
        <motion.button 
            ref={ref} 
            className="pillBtn" 
            onClick={() => setNumber()} 
            style={{borderColor:pillColour, backgroundColor: "transparent", scale: animate}}
            onMouseEnter={() => hoverState()}
        >
            {Label}
        </motion.button>
    );
  };
  
  export default PillButton;