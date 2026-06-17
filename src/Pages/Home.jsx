import React from 'react'
import '../styles/Home.css';
import TopBar from '../components/topBar';
import HeroSection from '../components/HeroSection';
import Project from '../components/Project';
import Skills from '../components/skills';
import Contact from '../components/contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
  once: false,
  mirror: true,
    });
  }, []);
  return (
    <div className="home">
      <TopBar />   
      <HeroSection/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default Home