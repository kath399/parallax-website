import React from "react";
import { useState, useEffect } from "react";
import Cross from "../../assets/icons/cross-white.svg";

import "./pillSection.css";
import "../../assets/styles/button.css";
import PillButton from "../../components/pill/pillButton";

const PillSection = () => {
  const [pillNumber, setPillNumber] = useState(-1);

  // There are five rows in the first part, seven in mobile view
  let pillRows = [];

  const changeOrder = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const ogList = [
    { label: "Helping Guide At-Risk Youth" },
    { label: "Helping to restore a local cricket club " },
    { label: "Helping Ensure Home Safety" },
    { label: "Helping Guide At-Risk Youth" },
    { label: "Helping to restore a local cricket club " },
    { label: "Helping Ensure Home Safety" },
    { label: "Helping to restore a local cricket club " },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
    { label: "Lorem ipsum dolor sit amet" },
    { label: "consectetur adipiscing elit" },
    { label: "sed do eiusmod tempor incididunt" },
    { label: "ut labore et dolore magna aliqua" },
    { label: "Ut enim ad minim veniam" },
    { label: "quis nostrud exercitation ullamco" },
    { label: "laboris nisi ut aliquip ex ea commodo consequat" },
  ];
  const newList = changeOrder(ogList);

  return (
    <section className="pill-container">
      <div className="pill-card" id="pill-container">
        {/* Overlay Section */}
        {pillNumber >= 0 && (
          <div className={`pill-overlay`}>
            <h1>What else would a Help Company™ do?</h1>
            <div className="overlay-content">
              <p>No. {pillNumber}</p>

              <PillButton
                Label={newList[pillNumber].label}
                number={pillNumber}
              />

              <p className="pill-overlay-text">
                Helping to restore a local cricket club to its former glory: The
                300-word application that secured an NRMA Insurance grant to
                bring new life to Goolwa Cricket Club.
              </p>

              <button
                className="close-button"
                onClick={() => setPillNumber(-1)}
              >
                <img className="close-button-icon" src={Cross} alt="Close" />
              </button>
            </div>
          </div>
        )}

        {/* Pill Default View */}
        <div
          className={pillNumber < 0 ? "section-pill" : "section-pill-blurred"}
        >
          <h1 className="text-center font-details-b pb-4">
            What else would a Help Company™ do?
          </h1>

          <div className="pill-section">
            {newList.map((item, index) => (
              <PillButton
                Label={item.label}
                number={index}
                setNumber={() => setPillNumber(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillSection;
