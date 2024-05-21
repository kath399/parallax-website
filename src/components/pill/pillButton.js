import React from "react";
import "./pillButton.css";

const PillButton = ({Label, colour, number, setNumber}) => {
    console.log(colour);

    const pillColour = randColour();

    function randColour() {
        let colourNRMA = ["#E0DF6B", "#91BF9E", "#F9AE97", "#FFFFFF"];
        return colourNRMA[Math.floor(Math.random() * colourNRMA.length)];
    }

    return (
        <button className="pillBtn" onClick={() => setNumber()} style={{backgroundColor:pillColour}}>
            {Label}
        </button>
    );
  };
  
  export default PillButton;