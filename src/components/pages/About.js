import React from 'react';
import me from "./images/Image from iOS.jpg"
import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbCSharp  } from 'react-icons/tb';
import { DiNetmagazine, DiVisualstudio, DiPhp   } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";


export default function About() {
  return (
    <>
    <div>
      
      <center>

         <img id="profileimg" src={me} alt='Me'></img></center>
         <h2 style={{textAlign:"center"}}>Programming Languages And Tools</h2>
         <center>
         <TbCSharp className='react-icons'/> C#
         <FaReact className='react-icons' /> React.js
         <FaJs className='react-icons' /> JavaScript
         <DiNetmagazine className='react-icons' /> ASP.NET
         <DiPhp className='react-icons' /> PHP
         <FaNodeJs className='react-icons' /> Node.js
         <AiOutlineConsoleSql className='react-icons' /> SQL
         <DiVisualstudio className='react-icons' /> Visual Studio
         </center>
         <p id='profileText'>
        Welcome to my Professional Portfolio! I’m Arjun, a Graduate Software Developer at Syscom PLC, where I’ve been building and supporting enterprise-level solutions since August 2025. I specialise in developing and maintaining business-critical applications, working across technologies such as C#, .NET, SQL, and modern web frameworks.
        With a BSc in Computer Science from Birmingham City University, I developed a solid foundation in areas like software development, cloud computing, databases, and front-end development. Since graduating, I’ve continued to grow my skills in engineering real-world complex problems, developing new features for business applications, and delivering reliable solutions for users.
         </p>
         
      </div>
    </>
  );
}
