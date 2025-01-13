/*import React from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ darkMode }) => {
  return (
    <div
      className="area"
      style={{
        background: darkMode
          ? "linear-gradient(to left, #111827, #4e54c8)" // Dark mode gradient
          : "linear-gradient(to left,  #D0A2F7, #4e54c8)", // Light mode gradient
      }}
    >
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundAnimation; */ 


/*import React from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ darkMode }) => {
  return (
    <div
      className="area"
      style={{
        background: darkMode
          ? "linear-gradient(to left, #111827, #4e54c8)" // Dark mode gradient
          : "linear-gradient(to left, #D0A2F7, #4e54c8)", // Light mode gradient
      }}
    >
      <ul className="pie-charts">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`pie-${index}`}></li>
        ))}
      </ul>
      <ul className="bars">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`bar-${index}`}></li>
        ))}
      </ul>
      <ul className="lines">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`line-${index}`}></li>
        ))}
      </ul>
      <ul className="scatter">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`scatter-${index}`}></li>
        ))}
      </ul>
      <ul className="radar">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`radar-${index}`}></li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundAnimation; */


import React from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ darkMode }) => {
  return (
    <div
      className="area"
      style={{
        background: darkMode
          ? "linear-gradient(to left, #111827, #4e54c8)" 
          : "linear-gradient(to left, #D0A2F7, #4e54c8)",
      }}
    >
      <ul className="pie-charts">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`pie-${index}`}></li>
        ))}
      </ul>
      <ul className="bars">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`bar-${index}`}></li>
        ))}
      </ul>
      <ul className="lines">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`line-${index}`}></li>
        ))}
      </ul>
      <ul className="scatter">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`scatter-${index}`}></li>
        ))}
      </ul>
      <ul className="radar">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`radar-${index}`}></li>
        ))}
      </ul>
      <ul className="syntax">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`syntax-${index}`}>const x = 10;</li>
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`syntax-python-${index}`}>def my_function():</li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundAnimation;


