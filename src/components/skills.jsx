import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiSpringboot,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import '../styles/skills.css'
function Skills() {
  const skills = [
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },

  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Docker", icon: <FaDocker color="#2496ED" /> },

  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
];

  return (
    <div id='skills' className="skills"  data-aos="zoom-in">
        <h1 className="skills-title">Skills</h1>
<div className="skill-container" data-aos="zoom-in">
      {skills.map((skill) => (
        <div className="skill-box" key={skill.name}>
          {skill.icon}
          
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Skills;