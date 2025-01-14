/* import React from "react";
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
*/

 import React from "react";

const styles = `
.area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.area ul {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.area ul li {
  position: absolute;
  transform: translateY(100vh);
  opacity: 0;
}

.pie-charts li {
  width: 80px;
  height: 80px;
  background: conic-gradient(#4e54c8, #d0a2f7, #4e54c8);
  animation: moveUp 12s linear infinite;
  clip-path: circle(50%);
}

.pie-charts li:nth-child(1) { left: 20%; animation-delay: 0s; }
.pie-charts li:nth-child(2) { left: 40%; animation-delay: 2s; }
.pie-charts li:nth-child(3) { left: 60%; animation-delay: 4s; }
.pie-charts li:nth-child(4) { left: 80%; animation-delay: 6s; }
.pie-charts li:nth-child(5) { left: 10%; animation-delay: 8s; }

.bars li {
  width: 20px;
  height: 100px;
  background: #4e54c8;
  animation: moveUp 8s ease-in-out infinite;
}

.bars li:nth-child(1) { left: 5%; animation-delay: 0s; }
.bars li:nth-child(2) { left: 25%; animation-delay: 2s; height: 150px; }
.bars li:nth-child(3) { left: 45%; animation-delay: 4s; height: 120px; }
.bars li:nth-child(4) { left: 65%; animation-delay: 6s; height: 180px; }
.bars li:nth-child(5) { left: 85%; animation-delay: 8s; height: 140px; }

.lines li {
  width: 3px;
  height: 80px;
  background: linear-gradient(to bottom, #4e54c8, #d0a2f7);
  animation: moveUp 10s ease-in-out infinite;
}

.lines li:nth-child(1) { left: 30%; animation-delay: 0s; }
.lines li:nth-child(2) { left: 50%; animation-delay: 2s; height: 150px; }
.lines li:nth-child(3) { left: 70%; animation-delay: 4s; height: 120px; }
.lines li:nth-child(4) { left: 40%; animation-delay: 6s; height: 180px; }
.lines li:nth-child(5) { left: 60%; animation-delay: 8s; height: 140px; }

.scatter li {
  width: 10px;
  height: 10px;
  background: #d0a2f7;
  border-radius: 50%;
  animation: moveUp 8s ease-in-out infinite;
}

.scatter li:nth-child(1) { left: 15%; animation-delay: 0s; }
.scatter li:nth-child(2) { left: 35%; animation-delay: 2s; }
.scatter li:nth-child(3) { left: 55%; animation-delay: 4s; }
.scatter li:nth-child(4) { left: 75%; animation-delay: 6s; }
.scatter li:nth-child(5) { left: 45%; animation-delay: 8s; }

.radar li {
  width: 80px;
  height: 80px;
  border: 2px solid #4e54c8;
  border-radius: 50%;
  animation: moveUp 15s linear infinite;
}

.radar li:nth-child(1) { left: 20%; animation-delay: 0s; }
.radar li:nth-child(2) { left: 40%; animation-delay: 3s; }
.radar li:nth-child(3) { left: 60%; animation-delay: 6s; }
.radar li:nth-child(4) { left: 80%; animation-delay: 9s; }
.radar li:nth-child(5) { left: 10%; animation-delay: 12s; }

.syntax li {
  font-family: monospace;
  color: #d0a2f7;
  font-size: 18px;
  animation: moveUp 20s linear infinite;
  opacity: 0;
}

.syntax li:nth-child(1) { left: 30%; animation-delay: 0s; }
.syntax li:nth-child(2) { left: 50%; animation-delay: 2s; }
.syntax li:nth-child(3) { left: 70%; animation-delay: 4s; }
.syntax li:nth-child(4) { left: 40%; animation-delay: 6s; }
.syntax li:nth-child(5) { left: 60%; animation-delay: 8s; }

.syntax li:nth-child(6) { left: 20%; animation-delay: 10s; }
.syntax li:nth-child(7) { left: 60%; animation-delay: 12s; }
.syntax li:nth-child(8) { left: 40%; animation-delay: 14s; }
.syntax li:nth-child(9) { left: 80%; animation-delay: 16s; }
.syntax li:nth-child(10) { left: 10%; animation-delay: 18s; }

@keyframes moveUp {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;

const BackgroundAnimation = ({ darkMode }) => {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div
      className="area"
      style={{
        background: darkMode
          ? "linear-gradient(to left, #111827, #4e54c8)"
          : "linear-gradient(to left, #D0A2F7, #4e54c8)",
      }}
    >
      <ul className="pie-charts">{Array.from({ length: 5 }).map((_, i) => <li key={`pie-${i}`} />)}</ul>
      <ul className="bars">{Array.from({ length: 5 }).map((_, i) => <li key={`bar-${i}`} />)}</ul>
      <ul className="lines">{Array.from({ length: 5 }).map((_, i) => <li key={`line-${i}`} />)}</ul>
      <ul className="scatter">{Array.from({ length: 5 }).map((_, i) => <li key={`scatter-${i}`} />)}</ul>
      <ul className="radar">{Array.from({ length: 5 }).map((_, i) => <li key={`radar-${i}`} />)}</ul>
      <ul className="syntax">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={`syntax-js-${i}`}>const x = 10;</li>
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={`syntax-python-${i}`}>def my_function():</li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundAnimation;




