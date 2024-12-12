"use client";

import React from "react";
import "./style.css";
import FooterItem from "./FooterItem";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Reusable Footer Items */}
        <FooterItem
          imageSrc="/images/phone.png" // Replace with the actual path to your image
          label="Phone Number"
          info="+974 3118 1843"
        />
        <FooterItem
          imageSrc="/images/email.png" // Replace with the actual path to your image
          label="Email Address"
          info="Elbrithqchr@gmail.com"
        />
        <FooterItem
          imageSrc="/images/location.png" // Replace with the actual path to your image
          label="Office Location"
          info="Ambassador Street, Zone 61"
        />
      </div>

      {/* Footer Logo Section */}
      <div className="footer-logo">
        <Image
          src="/images/Logo-image.png"
          alt="Elbrit Logo"
          width={100} // Optimized dimensions
          height={100}
          className="logo-image"
          priority // Ensures above-the-fold loading
        />
        <p className="logo-description">
          Your health, physical and emotional wellbeing is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>

      {/* Footer Bottom Text */}
      <p className="footer-bottom">
        © Elbrit Life Sciences Private Limited, C20, BKC, C Block, Mumbai 400051
      </p>
    </footer>
  );
}
