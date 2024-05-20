import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import "./form.css";

const Form = () => {
  return (
    <div id="form" className="form">
      <NavBar />
        <Container>
          <Row>
            <Col>
              Drone Roof Check
            </Col>
            <Col>
              Register your interest
              <button>Submit</button>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
};

export default Form;