import React from "react";
import "./style.css";
import Features from "../Features";

function Hero() {
  return (
    <section className="hero">
      {/* Title Section */}
      <h1 className="hero-title">Essential Vitamins</h1>

      <div className="main-subtitle-container">
        <div className="hero-subtitle-container">
          <h2 className="hero-subtitle">Online Medical Supplies</h2>
          <p className="hero-subtext">Get Your Vitamins & Minerals</p>
          <button className="hero-button">EXPLORE</button>
        </div>

        <div className="hero-image-container">
          <img
            src="/images/mainImage.png"
            alt="Probiotics Bottle"
            className="hero-image"
          />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="hero-highlights">
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <img
              src="/images/img1.png"
              alt="Vitamins Icon"
              className="highlight-icon"
            />
          </div>
          <div>
            <h3 className="highlight-title">Vitamins</h3>
            <p className="highlight-description">
              Increased vitamins and minerals in your diet
            </p>
          </div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <img
              src="/images/img2.png"
              alt="Weight Loss Icon"
              className="highlight-icon"
            />
          </div>
          <div>
            <h3 className="highlight-title">Weight Loss</h3>
            <p className="highlight-description">
              Find scientifically proven solutions
            </p>
          </div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon-container">
            <img
              src="/images/img3.png"
              alt="Functional Foods Icon"
              className="highlight-icon"
            />
          </div>
          <div>
            <h3 className="highlight-title">Functional Foods</h3>
            <p className="highlight-description">
              From protein powders to baby formula
            </p>
          </div>
        </div>
      </div>

      <Features />
    </section>
  );
}

export default Hero;
