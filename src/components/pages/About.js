import React from 'react';
import me from "./images/Image from iOS.jpg"
import { FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaNpm, FaReact } from 'react-icons/fa';

export default function About() {
  return (
    <>
    <div>
      
      <center>

         <img id="profileimg" src={me} alt='Me'></img></center>
         <h2 style={{textAlign:"center"}}>Programming Languages And Tools</h2>
         <FaGithub className='react-icons'/> Github
         <FaReact className='react-icons' /> React.js
         <FaJs className='react-icons' /> JavaScript
         <FaHtml5 className='react-icons' /> HTML5
         <FaCss3 className='react-icons' /> CSS3
         <FaNodeJs className='react-icons' /> Node.js
         <FaNpm className='react-icons' /> NPM
         <p id='profileText'>
        Welcome to my Professional Portfolio! My Name is Arjun! I am a programming bootcamper at the University of Birmingham! Located in the West 
        Midlands, I find the university such a promising place for coders and learners like myself to advance into our career and be able to 
        grasp the knowledge on being a full-stack developer within the web or software industries.I had chosen to be on this course because I have a passion for technology and wanting to build and create with coding. 
        Some of the things I want to build are software programming, creating games using C++/JavaScript or websites that involve a full-stack level of programming. 
         </p>
         
      </div>
    </>
  );
}
