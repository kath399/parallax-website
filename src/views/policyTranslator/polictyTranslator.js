import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./policyTranslator.css";
import Profile from "../../assets/img/profile/3D_object.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PolicyTranslator = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row className="pb-5 align-items-center">
            <Col>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col>
              <h1 className="pt-3 text-left pb-4">
                Policy Translator
              </h1>
              <div classname="w-570 text-base">
              Knowing what you are and aren’t covered for is important. But legal documents aren’t easy to digest. Which why we’ve made the Policy Translator.   
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PolicyTranslator;