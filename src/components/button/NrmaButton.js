import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({ Type, Style, Label, OnClick }) => {
    return (
        <button 
            className={[
                `nrmaBtn`,
                `nrmaBtn--${Type}`,
            ].join(' ')} 
            style={Style}
            onClick={OnClick}
        >
            {Label}
        </button>
    );
};

export default NrmaButton;
