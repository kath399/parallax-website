import React from "react";
import { useState } from "react";
import "./AnimatedBlogCard.css";

const AnimatedBlogCard = (props) => {
  return (
    <div className="card-normal">
      <div className="card blog-card">
        <div>
          <div>
            <div className="card-image">
              <img
                className="image-still"
                src={require("../../assets/img/carousal/" + props.image)}
                alt={props.alt}
              />
              <img
                className="image-animated"
                src={require("../../assets/img/carousal/" + props.animated)}
                alt={props.alt}
              />
            </div>
            <p className="card-title">{props.title}</p>
            <div className="card-content">
              <p>{props.content}</p>
              <button className="primary-button-transparent" src={props.link}>
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBlogCard;
