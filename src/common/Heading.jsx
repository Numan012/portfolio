import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import "../styles/common-heading.css";

const Heading = ({ heading }) => {
  return (
    <div className="common-heading">
      <h1>{heading}</h1>
      <img src={theme_pattern} alt="theme_pattern" />
    </div>
  );
};

export default Heading;
