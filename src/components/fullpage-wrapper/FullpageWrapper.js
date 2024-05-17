import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import DroneRoofCheck from '../../views/droneRoofCheck/DroneRoofCheck';
import HelpNation from '../../views/helpNation/HelpNation';
import PolicyRecap from '../../views/policyRecap/PolicyRecap';
import LifelineCertified from '../../views/lifelineCertified/LifelineCertified';
import HelpfulBreak from '../../views/helpfulBreak/HelpfulBreak';

const FullpageWrapper = () => {
  return (
    <ReactFullpage
      // Navigation
      navigation
      navigationTooltips={['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5']}

      // Sections
      

      // Anchors
      anchors={['section1', 'section2', 'section3', 'section4', 'section5']}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <DroneRoofCheck />
            </div>
            <div className="section">
              <HelpNation />
            </div>
            <div className="section">
              <PolicyRecap />
            </div>
            <div className="section">
              <LifelineCertified />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullpageWrapper;
