import React from 'react'
import project1 from '../assets/project1b.png'
import project2 from '../assets/Project2b.png'
import project3 from '../assets/project3b.png'
import project4 from '../assets/project4b.png'
import project5 from '../assets/project5b.png'
import project6 from '../assets/project6b.png'
import github from '../assets/github.png'
import '../styles/project.css'
function Project() {
   const projects = [
  {
    title: "Swactha Dashboard",
    description: "Smart campus cleanliness monitoring using YOLOv8 and real-time detection.",
    image: project1,
    github: "https://github.com/IrfanAhmed8/Swactha-Dashboard-for-Campus_ian",
  },
  {
    title: "AI GitHub Analyzer",
    description: "AI-powered repository insights, code analysis, and RAG-based querying.",
    image: project2,
    github: "https://github.com/IrfanAhmed8/AI-Powered-Github-Analyzer",
  },
  {
    title: "Code-Mate",
    description: "Real-time collaborative coding platform with code execution support.",
    image: project3,
    github: "https://github.com/IrfanAhmed8/Real_time_code_editor",
  },
  {
    title: "ResumeInQlik",
    description: "AI-assisted resume builder powered by Gemini API and Spring Boot.",
    image: project4,
    github: "https://github.com/IrfanAhmed8/AI-resumeGenerator-Spring-Boot-",
  },
  {
    title: "Fitness Recommendation",
    description: "Microservices-based fitness recommendation and tracking platform.",
    image: project5,
    github: "https://github.com/IrfanAhmed8/AI-Fitness",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio showcasing projects, skills, and experience.",
    image: project6,
    github: "https://github.com/IrfanAhmed8",
  },
];
  return (
   <div id='projects' data-aos="fade-right" className='project-container'>
  <h1>Projects</h1>

  <div
    className="project-list"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "70px",
    }}
  >
    {projects.map((project) => (
  <div className="box"  data-aos="flip-left" key={project.title}>
    <img
      src={project.image}
      alt={project.title}
    />

    <h2>{project.title}</h2>

    <p>{project.description}</p>

    <button
  className="github-btn"
  onClick={() => window.open(project.github, "_blank")}
  style={{
    width: "120px",
    height: "50px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
  }}
>
  GitHub
</button>
  </div>
))}
  </div>
</div>
  )
}

export default Project