import React from "react";
import { useState, useEffect } from "react";
import Cross from "../../assets/icons/Cross.svg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "./pillSection.css";
import PillButton from "../../components/pill/pillButton";

const change = arr => [...arr].sort(() => Math.random() - 0.5);

const ogList = [
    {label:"Helping Guide At-Risk Youth"},
    {label:"Helping to restore a local cricket club "},
    {label:"Helping Ensure Home Safety"},
    {label:"Helping Guide At-Risk Youth"},
    {label:"Helping to restore a local cricket club "},
    {label:"Helping Ensure Home Safety"},
    {label:"Helping to restore a local cricket club "},
    {label: "Lorem ipsum dolor sit amet" },
    {label: "consectetur adipiscing elit" },
    {label: "sed do eiusmod tempor incididunt" },
    {label: "ut labore et dolore magna aliqua" },
    {label: "Ut enim ad minim veniam" },
    {label: "quis nostrud exercitation ullamco" },
    {label: "laboris nisi ut aliquip ex ea commodo consequat"},
    {label: "Lorem ipsum dolor sit amet" },
    {label: "consectetur adipiscing elit" },
    {label: "sed do eiusmod tempor incididunt" },
    {label: "ut labore et dolore magna aliqua" },
    {label: "Ut enim ad minim veniam" },
    {label: "quis nostrud exercitation ullamco" },
    {label: "laboris nisi ut aliquip ex ea commodo consequat"},
    {label: "Lorem ipsum dolor sit amet" },
    {label: "consectetur adipiscing elit" },
    {label: "sed do eiusmod tempor incididunt" },
    {label: "ut labore et dolore magna aliqua" },
    {label: "Ut enim ad minim veniam" },
    {label: "quis nostrud exercitation ullamco" },
    {label: "laboris nisi ut aliquip ex ea commodo consequat"},
    {label: "Lorem ipsum dolor sit amet" },
    {label: "consectetur adipiscing elit" },
    {label: "sed do eiusmod tempor incididunt" },
    {label: "ut labore et dolore magna aliqua" },
    {label: "Ut enim ad minim veniam" },
    {label: "quis nostrud exercitation ullamco" },
    {label: "laboris nisi ut aliquip ex ea commodo consequat"},
    {label: "Lorem ipsum dolor sit amet" },
    {label: "consectetur adipiscing elit" },
    {label: "sed do eiusmod tempor incididunt" },
    {label: "ut labore et dolore magna aliqua" },
    {label: "Ut enim ad minim veniam" },
    {label: "quis nostrud exercitation ullamco" },
    {label: "laboris nisi ut aliquip ex ea commodo consequat"}
];

const newList = change(ogList);


const PillSection = () => {
    const [pillNumber, setPillNumber] = useState(-1);

    return (
        <div className="pill-container pt-3 pb-3" id="pill-container">
            {/* Overlay Section */}
            {pillNumber >= 0 &&
                <div className={`pill-overlay`} onClick={() => setPillNumber(-1)}>
                    <h1>What else would a Help Company™ do?</h1>

                    <p>No. {pillNumber}</p>

                    <PillButton Label={newList[pillNumber].label}  number={pillNumber} /> 

                    <p className="pill-overlay-text">Helping to restore a local cricket club to its former glory: The 300-word application that secured an NRMA Insurance grant to bring new life to Goolwa Cricket Club.</p>
                    
                    <button className="closeButton2">
                        <img src={Cross} alt='Close' />
                    </button>
                </div>
            }

            {/* Pill Default View */}
            <h1 className="text-center font-details-b pb-4">What else would a Help Company™ do?</h1>
            <div className="section-pill">
                <div className="pill-section">
                    {newList.map((item, index) => (
                            <PillButton Label={item.label}  number={index} setNumber={() => setPillNumber(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PillSection;