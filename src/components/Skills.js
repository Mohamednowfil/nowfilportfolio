import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", img: "/html.png" },
    { name: "CSS", img: "/css.png" },
    { name: "JavaScript", img: "/javascript.png" },
    { name: "Python", img: "/python.png" },
    { name: "React", img: "/reactjs.png" },
    { name: "Node js", img: "/nodejs.png" },
    { name: "Express js", img: "/express.png" },
    { name: "MongoDB", img: "/mongodb.png" },
    { name: "MySQL", img: "/mysql.png" },
    { name: "Bootstrap", img: "/bootstrap.png" },
    { name: "Excel", img: "/excel.webp" },
    { name: "Power BI", img: "/powerbi.png" },
    { name: "Github", img: "/github.png" },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-boxes">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.img} alt={`${skill.name} icon`} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

