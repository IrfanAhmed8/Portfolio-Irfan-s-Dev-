import React from 'react'
import '../styles/topBar.css';
import resume from "../assets/IrfanAhmed.J.pdf";

function topBar() {
  return (
    <div>
        <div className="home-nav" >
        <a style={{fontSize:"larger", fontWeight:"bold"}} href="#home">Home</a>
        <a style={{fontSize:"larger", fontWeight:"bold"}} href="#projects">projects</a>
        <a style={{fontSize:"larger", fontWeight:"bold"}} href="#skills">skills</a>
        <a style={{fontSize:"larger", fontWeight:"bold"}} href="#contact">Contact</a>
        <a style={{fontSize:"larger", fontWeight:"bold"}} href={resume} target="_blank" rel="noopener noreferrer">
  Resume
</a>
      </div>
    </div>
  )
}

export default topBar