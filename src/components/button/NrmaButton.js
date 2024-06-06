import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({ Type, Size, Label, OnClick }) => {
    return (
        <button 
            className={[
                `nrmaBtn`,
                `nrmaBtn--${Type}`,
            ].join(' ')} 
            style={{
                height: (Size==='Small') ? '32px' : (Size==='Medium') ? '36px' : '46px'
            }}
            onClick={OnClick}
        >
            {Label}
        </button>
    );
};

export default NrmaButton;
