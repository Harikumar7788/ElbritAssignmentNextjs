import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img
            src="/images/Logo-image.png"
            alt="Elbrit Logo"
            className="logo-image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
