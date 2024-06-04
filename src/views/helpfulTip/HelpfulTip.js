import React from "react";
import Fade from "react-awesome-reveal";

import "./helpfulTip.css";
import Leaves from "../../components/leaves/Leaves";

const HelpfulTip = (prop) => {

  const fading = prop.fading;
  console.log(fading)
  const leafSetting = {
    maxLeaves : 120,
    blowerIntensity: 1000,
    blowerRange: 200,
  };

  return (
    <div className="helpfulTip"> 

      <Fade down duration={2000}>
      </Fade>
      <Fade up duration={2000}>
        <div>
          A helpful tip.
          <div style={{paddingTop: '36px', width:'800px', fontSize: '24px', textAlign: 'center'}}>
          Reduce your fire risk by clearing up any dry leaves and debris around your home or gutters.
          </div>
        </div>
      </Fade>
      <Leaves {...leafSetting}></Leaves>

    </div>
  );
};

export default HelpfulTip;