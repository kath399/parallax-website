import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import "./BlogCard.css";
import PlusLogo from "./../../assets/icons/PlusIcon.svg";

const BlogCard = (props) => {
  const [showCard, setShowCard] = useState(false);

  const title = props.title;
  const content = props.content;
  const link = props.link;
  const image = props.image;
  const colour = props.colour;
  const alt = props.alt;

  return (
    <div className={showCard ? "card-resize" : "card-normal"}>
      <div className="card blog-card">
        {/* <Tilt > */}
        <div>
          <div>
            <div className="card-image">
              <img className="" src={image} alt={alt} />
            </div>
            <p className="card-title">{props.title}</p>
            <p>{props.content}</p>
            <button src={link}>Find out more</button>
          </div>
        </div>
      </div>
      {/* </Tilt> */}
    </div>
  );
};

export default BlogCard;
