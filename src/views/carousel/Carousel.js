import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import BlogCard from "../../components/blog-card/BlogCard";
import "./Carousel.css";
import ChevronArrow from "./../../assets/icons/chevron-left-blue.svg";

const cardval = [
  {
    title: "Forgot To Lock Up",
    content: "You’re covered even if you forgot to lock up.",
    image: "door.png",
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
  const [carouselContainer, setCarousel] = useState();
  function goLeft() {
    console.log("Left");
  }

  function goRight() {
    console.log("Right");
  }

  useEffect(() => {
    setCarousel(document.getElementById("cards"));
    const button = document.getElementById("carousel-left");

    button.onclick = () => {
      document.getElementById("cards").scrollRight += 200;
    };
  }, []);

  return (
    <div className="blogs">
      <section>
        <h2 className="text-center section-header">
          A Help Company™ would also make its insurance products more helpful.​
        </h2>
      </section>
      <div className="card-group d-flex flex-nowrap" id="cards">
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
        <button
          // onClick={() => goLeft()}
          id="carousel-left"
          className="chevron-left"
          onclick={() => (carouselContainer.scrollLeft -= 900)}
        >
          <img src={ChevronArrow} alt="Left Chevron control" />
        </button>
        <button
          className="chevron-right"
          id="carousel-right"
          // onClick={() => goRight()}

          onclick={() => (carouselContainer.scrollLeft += 900)}
        >
          <img src={ChevronArrow} alt="Right Chevron control" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
