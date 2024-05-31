import React from "react";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import Tilt from 'react-parallax-tilt';
import BlogCard from "../blog-card/BlogCard";
import "./Carousel.css";
import ExampleCardImage from "./../../assets/img/carousal/example-carousel.png";
import ExampleCardImage2 from "./../../assets/img/carousal/moneypig.png";
import ExampleCardImage3 from "./../../assets/img/carousal/keychain.png";
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
    <section className="blogs ">
      <Container>
        <h1 className="text-center">
          It would also make its insurance products more helpful
        </h1>
        <div className="card-group d-flex flex-nowrap">
          <BlogCard
            title="Open Door Policy"
            content="You’re covered even if you forgot to lock your front door."
            image={ExampleCardImage}
            colour="#E0DF6B"
          />
          <BlogCard
            title="Flexible Payment"
            content="You’re covered even if you forgot to lock your front door."
            image={ExampleCardImage2}
            colour="#F9AE97"
          />
          <BlogCard
            title="Car share cover"
            content="You’re covered even if you forgot to lock your front door."
            image={ExampleCardImage3}
            colour="#91BF9E"
          />
          <BlogCard
            title="Car share cover"
            content="You’re covered even if you forgot to lock your front door."
            image={ExampleCardImage3}
            colour="#91BF9E"
          />
        </div>

        <div className="controls">
          <button>
            <img src={ChevronArrow} />
          </button>
          <button>
            <img className="chevron-right" src={ChevronArrow} />
          </button>
        </div>
      </Container>
    </section>
  );
};
export default Carousel;
