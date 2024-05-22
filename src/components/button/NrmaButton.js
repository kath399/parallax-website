import React from "react";
import "./nrmaButton.css";

const NrmaButton = ({ Label, OnClick }) => {
    return (
        <button className="nrmaBtn" onClick={OnClick}>
            {Label}
        </button>
    );
};

export default NrmaButton;
