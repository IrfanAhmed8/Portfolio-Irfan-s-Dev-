import React from 'react'
import portfolioImg from '../assets/profile.png'
import '../styles/HeroSection.css';
function HeroSection() {
  return (
    <div id='home' data-aos="fade-up" className="hero-section" style={{display:'flex',alignItems: "center",marginTop:"150px"}}>
        <div className="hero-text" style={{flex:1, paddingLeft:'40px'}}>
            <h1 style={{ fontSize: "4rem", marginBottom: "10px", fontWeight: 'bolder'}}>
    Hi, I'm Irfan Ahmed
  </h1>
            <p style={{fontSize:"1.4rem", fontWeight:'bold'}}>Software engineer driven by curiosity and a passion for solving complex engineering problems. I enjoy building scalable systems, optimizing performance, and designing solutions that remain reliable as they grow. Interested in system design, distributed systems, and the challenges of latency, scalability, and efficiency.
</p>
        </div>
       <div
  className="hero-image"
  style={{
    width: "17%",
    height: "350px",
    overflow: "hidden",
    paddingRight: "10px",
  }}
>
  <img
    src={portfolioImg}
    alt="Hero"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      border: "4px solid rgba(255,255,255,0.3)",
      borderRadius: "16px",
      boxShadow: "0 0 19px rgba(255,255,255,0.15)",
      

    }}
  />
</div>
    </div>
  )
}

export default HeroSection