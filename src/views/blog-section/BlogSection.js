import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from 'react-parallax-tilt';
import BlogCard from "../blog-card/BlogCard";
import "./BlogSection.css";
import ExampleCardImage from "./../../assets/img/carousal/example-carousel.png";
import ExampleCardImage2 from "./../../assets/img/carousal/moneypig.png";
import ExampleCardImage3 from "./../../assets/img/carousal/keychain.png";


const cardval = [{
    title: "Open door policy",
    subtitle: "You're covered even if you forgot to lock your front door."
},
{
    title: "Flexible Payment",
    subtitle: "You're covered evn if you forgot to lock your front door."
}];

const BlogSection = () => {
    return (
        <div id="blogs">
            <Container>
            <h1 className="text-center pb-5">It would also make its insurance products more helpful</h1>
                <div className="card-deck">
                    <BlogCard title="Open Door Policy" content="You’re covered even if you forgot to lock your front door." image={ExampleCardImage} colour="#E0DF6B"/>
                    <BlogCard title="Flexible Payment" content="You’re covered even if you forgot to lock your front door." image={ExampleCardImage2} colour="#F9AE97"/>
                    <BlogCard title="Car share cover" content="You’re covered even if you forgot to lock your front door." image={ExampleCardImage3} colour="#91BF9E"/>
                </div>
            </Container>
        </div>
    )
}
export default BlogSection;