import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
// import BlogCard from "../../components/blog-card/BlogCard";
import AnimatedBlogCard from "../../components/animated-blog-card/AnimatedBlogCard";
import "./Carousel.css";
import ChevronArrow from "./../../assets/icons/chevron-left-blue.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  useInView,
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Stage, AnimatedSprite } from "@pixi/react";

const cardval = [
  {
    title: "Forgot To Lock Up",
    content: "You’re covered even if you forgot to lock up.",
    image: "door.png",
    animated: "keychain_once.gif",
    alt: "Door picture",
  },
  {
    title: "Flexible Payments",
    content: "Now you can choose to pay monthly at no extra cost.",
    image: "moneypig.png",
    animated: "keychain_once.gif",
    alt: "Money bank pig",
  },
  {
    title: "Anyone Can Drive It Cover",
    content: "With us your covered even if it's not you driving your car.",
    image: "keychain.png",
    animated: "keychain_once.gif",
    alt: "Keys",
  },
  {
    title: "Lifetime Repair Guarantee",
    content: "We cover all the repair work done for a lifetime.",
    image: "judge.png",
    animated: "keychain_once.gif",
    imageAnimated: "keychain_once.gif",
    alt: "Judges wig",
  },
];

const Carousel = () => {
  const [carouselContainer, setCarousel] = useState();
  const [cardWidth, setCardWidth] = useState();
  const [cardIndex, setCardIndex] = useState(0);
  const target = React.createRef();
  const slider = React.useRef(null);

  let duplicatedSlides = [...cardval, ...cardval];

  function goLeft() {
    carouselContainer.scrollLeft -= cardWidth;
    let val = cardIndex - 1;
    setCardIndex(val);
    console.log("==================");
    console.log(duplicatedSlides);
    if (cardIndex === 1) {
      console.log(duplicatedSlides);
      console.log(cardIndex);
      let copy = duplicatedSlides.slice(4, 8);
      copy.unshift(cardval);
      duplicatedSlides = copy;
      console.log("COPY");
      console.log(copy);
      // duplicatedSlides.unshift(cardval);
      // console.log("Unshift " + cardval);
    } else if (cardIndex === -1) {
      setCardIndex(3);
    }
    console.log("Left");
    console.log("==================");
  }

  function goRight() {
    carouselContainer.scrollLeft += cardWidth;
    let val = cardIndex + 1;
    setCardIndex(val);
    if (cardIndex === 2) {
      console.log(cardIndex);
      duplicatedSlides.push(cardval);
      // console.log("Pushed " + cardval);
    } else if (cardIndex === 4) {
      setCardIndex(0);
    }
    console.log("Right");
  }

  useEffect(() => {
    setCarousel(document.getElementById("cards"));
    const button = document.getElementById("carousel-left");

    const cardValue = document.getElementsByClassName("card")[0].children[0];
    setCardWidth(cardValue.scrollWidth);

    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        console.log(entry.target.innerHTML);
        if (entry.isIntersecting) {
          console.log("HI");
        }
      },
      {
        threshold: 1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (window.matchMedia("(max-width: 500px)").matches) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
    };
  } else if (window.matchMedia("(min-width: 1300px)").matches) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  } else if (window.matchMedia("(max-width: 790px)").matches) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
  } else if (window.matchMedia("(max-width: 1000px)").matches) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      slidesToScroll: 1,
    };
  } else if (window.matchMedia("(max-width: 1440px)").matches) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      slidesToScroll: 1,
    };
  }

  return (
    <div className="blogs">
      <section>
        <h2 className="text-center section-header">
          A Help Company™ would also make its insurance products more helpful.​
        </h2>
      </section>

      <Slider ref={slider} {...settings}>
        {cardval.map(function (data) {
          return (
            <AnimatedBlogCard
              title={data.title}
              content={data.content}
              image={data.image}
              animated={data.animated}
              alt={data.alt}
            />
          );
        })}
      </Slider>

      <div className="controls">
        <button
          onClick={() => slider?.current?.slickPrev()}
          id="carousel-left"
          className="chevron-left"
        >
          <img src={ChevronArrow} alt="Left Chevron control" />
        </button>
        <button
          className="chevron-right"
          id="carousel-right"
          onClick={() => slider?.current?.slickNext()}
        >
          <img src={ChevronArrow} alt="Right Chevron control" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
