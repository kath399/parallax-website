import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({ Type, Label, OnClick }) => {
    return (
        <button 
            className={[
                `nrmaBtn`,
                `nrmaBtn--${Type}`,
            ].join(' ')} 
            onClick={OnClick}
        >
            {Label}
        </button>
    );
};

export default NrmaButton;
