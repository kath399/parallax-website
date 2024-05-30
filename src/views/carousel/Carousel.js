import React from "react";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import BlogCard from "../blog-card/BlogCard";
import "./Carousel.css";
import ExampleCardImage from "./../../assets/img/carousal/example-carousel.png";
import ExampleCardImage2 from "./../../assets/img/carousal/moneypig.png";
import ExampleCardImage3 from "./../../assets/img/carousal/keychain.png";
import ExampleCardImage4 from "./../../assets/img/carousal/judge.png";
import ChevronArrow from "./../../assets/icons/chevron-left.svg";

const cardval = [
  {
    title: "Open door policy",
    content: "You’re covered even if you forgot to lock your front door.",
  },
  {
    title: "Flexible Payment",
    subtitle: "You're covered evn if you forgot to lock your front door.",
  },
  {
    title: "Car share cover",
    subtitle: "You're covered evn if you forgot to lock your front door.",
  },
  {
    title: "Testing 123",
    subtitle: "You're covered evn if you forgot to lock your front door.",
  },
];

const Carousel = () => {
  const carouselGroup = document.getElementsByClassName("blogs");
  const distance = 400;

  return (
    <div className="blogs ">
      <h2 className="text-center">
        It would also make its insurance products more helpful
      </h2>
      <div className="card-group d-flex flex-nowrap">
        <BlogCard
          title="Forgot To Lock Up"
          content="You’re covered even if you forgot to lock up."
          image={ExampleCardImage}
          colour="#E0DF6B"
        />
        <BlogCard
          title="Flexible Payments"
          content="Now you can choose to pay monthly at no extra cost."
          image={ExampleCardImage2}
          colour="#F9AE97"
        />
        <BlogCard
          title="Anyone Can Drive It Cover"
          content="With us your covered even if it's not you driving your car."
          image={ExampleCardImage3}
          colour="#91BF9E"
        />
        <BlogCard
          title="Lifetime Repair Guarantee"
          content="We cover all the repair work done for a lifetime."
          image={ExampleCardImage4}
          colour="#91BF9E"
        />
      </div>

      <div className="controls">
        <button>
          <img src={ChevronArrow} alt="Left Chevron control" />
        </button>
        <button>
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
