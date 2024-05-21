import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./db-skills";

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

function randColour() {
    let colourNRMA = ["#E0DF6B", "#91BF9E", "#F9AE97", "#FFFFFF"];
    return colourNRMA[Math.floor(Math.random() * colourNRMA.length)];
}

const Skills = () => {
    return (
        <div className="questions pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">What else would a Help Company™ do?</h1>
            <div className="pill-section">
                {newList.map(item => (
                    <PillButton Label={item.label} colour={randColour()} />
                ))}
            </div>
        </div>
    );
};

export default Skills;




{/* <CardDeck>
                <div>
                    <Card className="focus mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Version Control</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                                    <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="focus mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Database</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.databases.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card className="focus mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Frameworks</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.frameworks.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="focus mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Hosting Platform</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.hostingPlatforms.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card className="focus mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Scripting Languages</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.frontend.map((skill, index) => (
                                    <span key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </CardDeck> */}