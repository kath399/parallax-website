import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({ Type, Size, Label, OnClick }) => {
    return (
        <button 
            className={[
                `nrmaBtn`,
                `nrmaBtn--${Type}`,
                `nrmaBtn--${Size}`
            ].join(' ')} 
            style={{
                height: (window.innerWidth < 1440) ? "32px": "46px",
            }}
            onClick={OnClick}
        >
            {Label}
        </button>
    );
};

export default NrmaButton;


