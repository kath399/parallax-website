import React, { useState } from "react";
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
    <>
      <NavBar />
      <div id="form" className="form">
          <div className="formColumn">
            <h1 className="formTitle">{Title}</h1>
          </div>
          <div className="formColumn">
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
              
              <NrmaButton Type='Secondary' Label={'Submit'} />
              <br/>
            </div>
          </div>

      </div>
      <Footer/>
    </>
  );
};

export default Form;