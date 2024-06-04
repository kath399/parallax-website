import React from "react";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import BlogCard from "../../components/blog-card/BlogCard";
import "./Carousel.css";
import ChevronArrow from "./../../assets/icons/chevron-left-blue.svg";

const cardval = [
  {
    title: "Forgot To Lock Up",
    content: "You’re covered even if you forgot to lock up.",
    image: "example-carousel.png",
    alt: "Door picture",
  },
  {
    title: "Flexible Payments",
    content: "Now you can choose to pay monthly at no extra cost.",
    image: "moneypig.png",
    alt: "Money bank pig",
  },
  {
    title: "Anyone Can Drive It Cover",
    content: "With us your covered even if it's not you driving your car.",
    image: "keychain.png",
    alt: "Keys",
  },
  {
    title: "Lifetime Repair Guarantee",
    content: "We cover all the repair work done for a lifetime.",
    image: "judge.png",
    alt: "Judges wig",
  },
];

const Carousel = () => {
  function goLeft() {
    console.log("Left");
  }

  function goRight() {
    console.log("Right");
  }

  return (
    <div className="blogs">
      <h2 className="text-center">
        A Help Company™ would also make its insurance products more helpful.​
      </h2>
      <div className="card-group d-flex flex-nowrap">
        {cardval.map(function (data) {
          return (
            <BlogCard
              title={data.title}
              content={data.content}
              image={data.image}
              alt={data.alt}
            />
          );
        })}
      </div>

      <div className="controls">
        <button onClick={() => goLeft()}>
          <img src={ChevronArrow} alt="Left Chevron control" />
        </button>
        <button onClick={() => goRight()}>
          <img
            className="chevron-right"
            src={ChevronArrow}
            alt="Right Chevron control"
          />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
