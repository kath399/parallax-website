import React from "react";
import "./pillButton.css";

const PillButton = ({Label, OnClick, colour}) => {
    console.log(colour);
    return (
        <button className="pillBtn" onclick={() => OnClick} style={{backgroundColor:colour}}>
            {Label}
        </button>
    );
  };
  
  export default PillButton;