import React from "react";
import { useState } from "react";
import Cross from "../../assets/icons/Cross.svg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "./skills.css";
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

console.log(newList);


const Skills = () => {
    const [currNumber, setCurrNumber] = useState(-1);

    return (
        <div className="questions pt-3 pb-3" id="skills">
            {currNumber >= 0 &&
                <div className={`pill-overlay`} onClick={() => setCurrNumber(-1)}>
                    <h1>What else would a Help Company™ do?</h1>

                    <p>No. {currNumber}</p>

                    <PillButton Label={newList[currNumber].label} key={currNumber} number={currNumber} /> 

                    <p className="pill-overlay-text">Helping to restore a local cricket club to its former glory: The 300-word application that secured an NRMA Insurance grant to bring new life to Goolwa Cricket Club.</p>
                    

                    <button className="closeButton2">
                        <img src={Cross} alt='Close' />
                    </button>
                </div>
            }
            <h1 className="text-center font-details-b pb-4">What else would a Help Company™ do?</h1>
            <div className="section-pill">
                <div className="pill-section">
                    {newList.map((item, index) => (
                        <PillButton Label={item.label} key={index} number={index} setNumber={() => setCurrNumber(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;