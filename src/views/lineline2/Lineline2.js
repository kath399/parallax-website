import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./lifeline2.css";
import Profile from "../../assets/img/profile/3D_object.png";
import Image from "react-bootstrap/Image";

const Lifeline2 = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row>
            <Col>
              <Image className="profile justify-content-end" alt="profile" src={Profile} style={{width: '252px'}} />
            </Col>
            <Col>
              <Image className="profile justify-content-end" alt="profile" src={Profile} style={{width: '252px'}} />
            </Col>
            <Col>
              <Image className="profile justify-content-end" alt="profile" src={Profile} style={{width: '252px'}} />
            </Col>
            <Col>
              <Image className="profile justify-content-end" alt="profile" src={Profile} style={{width: '252px'}} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Lifeline2;