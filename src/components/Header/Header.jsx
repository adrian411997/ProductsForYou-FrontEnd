import React from "react";
import "./Header.css";
import Buttons from "./buttons";

const Header = () => {
  return (
    <header>
      <Buttons />
      <div className="phrase">
        <div className="empty"></div>
        <div className="slogan-container">
          <h1 className="slogan">
            Come, see and buy with awesome prices with an excellent quality and
            experience!
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
