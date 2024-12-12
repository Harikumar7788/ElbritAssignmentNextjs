"use client"; 

import React from "react";
import "./style.css"
import Ingredients from "../Ingredients";

function Features() {
  return (
    <div className="main-container">
      <section className="features-section">
        <div className="features-wrapper">
          <div className="feature-item">
             <img src = "/images/icons (6).png" className = "image"/>
            <h3>Clinically Studied</h3>
            <p>All products that we offer have undergone lab and safety tests.</p>
          </div>
          <div className="feature-item">
          <img src = "/images/icons (5).png" className = "image"/>
            <h3>Vegetarian Friendly</h3>
            <p>We have a wide selection of vegetarian products to meet your needs.</p>
          </div>
          <div className="feature-item">
          <img src = "/images/icons (4).png" className = "image"/>
            <h3>Made in India</h3>
            <p>Shop local and explore health products made right here in India.</p>
          </div>
          <div className="feature-item">
          <img src = "/images/icons (3).png" className = "image"/>
            <h3>Free Shipping</h3>
            <p>We deliver to your door with no shipping costs on your orders.</p>
          </div>
          <div className="feature-item">
          <img src = "/images/icons (2).png" className = "image"/>
            <h3>No Risk</h3>
            <p>We ensure that all products are safe and within their usable date.</p>
          </div>
          <div className="feature-item">
          <img src = "/images/icons.png" className = "image"/>
            <h3>GMO Free</h3>
            <p>Natural, no modified products or derivatives for those who need it.</p>
          </div>
        </div>
      </section>
      <Ingredients />
    </div>
  );
}

export default Features;
