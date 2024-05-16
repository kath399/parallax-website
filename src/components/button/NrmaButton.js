import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({Label}) => {
    return (
        <button className="nrmaBtn">
            {Label}
        </button>
    );
  };
  
  export default NrmaButton;