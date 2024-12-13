// src/Home.js
import React from 'react';
import homeImage from './images/home-image.png'; // Path to your image

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Home" className="home-image" />
      <h2 className="home-text">Human resources (HR) is the set of people who make up the workforce of an organization, business sector, industry, or economy.[1][2] A narrower concept is human capital, the knowledge and skills which the individuals command.[3] Similar terms include manpower, labor, labor-power, or personnel.</h2>
    </div>
  );
};

export default Home;
