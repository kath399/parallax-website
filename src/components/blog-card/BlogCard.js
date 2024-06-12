import React from "react";
import { useState } from "react";
import "./BlogCard.css";
import { Fade } from "react-awesome-reveal";

import vid from "../../assets/img/carousal/keymovie.mov";

const BlogCard = (props) => {
  return (
    <div className="card-normal">
      <div className="card">
        <div className="card-image">
          <Fade duration={1000} triggerOnce="true">
            {props.image.endsWith(".mov") ? (
              <video
                controls="controls"
                width="300"
                height="300"
                name="Video Name"
                autoplay
              >
                <source src={vid} type="video/mov"></source>
              </video>
            ) : (
              <>
                <img
                  className=""
                  src={require("../../assets/img/carousal/" + props.image)}
                  alt={props.alt}
                />
              </>
            )}
          </Fade>
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
  );
};

export default BlogCard;
