import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>Hi, my name is Aryan Singh. I am a Software Engineering student.</p>
      <a href="/Aryan_Singh_Resume.pdf" download="Aryan_Singh_Resume.pdf">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
