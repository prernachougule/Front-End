import React from 'react';
import aboutImage from './images/about-image.jpg';  // Correct image path

const About = () => {
  return (
    <div className="about-container">
      {/* Add the image */}
      <img src={aboutImage} alt="About" className="about-image" />

      {/* Add the text content */}
      <h2>
        HR needs to understand the organization’s needs and make sure those needs are met when recruiting for new positions. It’s not as simple as just throwing an ad up on Indeed: you’ll need to analyze the market, consult stakeholders, and manage budgets.
        Then, once the role is advertised, more research needs to be done to make sure that the right candidates are being attracted and presented. Recruiting is a massive—and costly—undertaking; the right candidate can revitalize an entire organization, but the wrong candidate can upend operations.
      </h2>
    </div>
  );
};

export default About;
