"use client";

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "./style.css";

function FooterItem({ imageSrc, label, info }) {
  return (
    <div className="footer-item">
      <div className="icon-container">
        <Image src={imageSrc} alt={label} width={40} height={40} />
      </div>
      <div className="text-container">
        <p className="label">{label}</p>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}

FooterItem.propTypes = {
  imageSrc: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired,  
  info: PropTypes.string.isRequired,    
};

export default FooterItem;
