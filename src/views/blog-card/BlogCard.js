import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Tilt from 'react-parallax-tilt';
import "./BlogCard.css";
import PlusLogo from "./../../assets/icons/PlusIcon.svg";

const BlogCard = (props) => {
    const [showCard, setShowCard] = useState(false);

    const title = props.title;
    const content = props.content;
    const link = props.link;
    const image = props.image;
    const colour = props.colour;

    return (
        <div className={showCard ? "card-resize" : "card-normal"}>
            <div className="card blog-card" style={{backgroundColor: colour}}>
                {/* <Tilt > */}
                    <div>
                        <a>
                            <p>{props.title}</p>
                            <div className="row">
                                { showCard && (
                                    <div className="card-content col-6">
                                        <p>{content}
                                            <br></br>
                                            <br></br>
                                        <button>Find out more</button> 
                                        </p>
                                    </div>
                                )
                                }
                                <div className={showCard ? "card-image col-6" : "card-image col-12"}>
                                    <img className="" src={image} />
                                </div>
                            </div>
                            <button
                                className="more" onClick={() => setShowCard(!showCard)}
                            >          
                            <img className="plus-logo" src={PlusLogo} alt="fireSpot"/>
                            </button>
                        </a>
                    </div>
                </div>
            {/* </Tilt> */}
        </div>
    )
}

export default BlogCard;