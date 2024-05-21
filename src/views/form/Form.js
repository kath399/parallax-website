import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import NrmaButton from "../../components/button/NrmaButton";
import "./form.css";

const Form = ({Title, ButtonLabel}) => {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const postcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const checkboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div id="form" className="form">
      <NavBar />
        
        <Row>
          <Col>
            <h1 className="formTitle">{Title}</h1>
          </Col>
          <Col>
            <div className="formInputColumn">
              <p className="">Register your interest</p>
              <input
                type="text"
                className="formInput"
                value={name}
                onChange={nameChange}
                placeholder={'Name*:'}
              />
              <input
                type="text"
                className="formInput"
                value={email}
                onChange={emailChange}
                placeholder={'Email*:'}
              />
              <input
                type="text"
                className="formInput"
                style={{width: '130px'}}
                value={postcode}
                onChange={postcodeChange}
                placeholder={'Postcode'}
              />
              <label>
                <input
                  type="checkbox"
                  className="formCheckbox"
                  checked={isChecked}
                  onChange={checkboxChange}
                />
                Yes! I agree to the Terms and Conditions*
              </label>
              
              <NrmaButton Label={'Submit'} />
              <br/>
            </div>
          </Col>
        </Row>
        <Footer/>
    </div>
  );
};

export default Form;