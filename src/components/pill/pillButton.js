import React from "react";
import "./pillButton.css";

const PillButton = ({Label, colour, number, setNumber}) => {

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
        <button className="pillBtn" onClick={() => setNumber()} style={{borderColor:pillColour, backgroundColor: "transparent"}}
        onMouseEnter={() => hoverState()}>
            {Label}
        </button>
    );
  };
  
  export default PillButton;