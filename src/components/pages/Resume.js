import React from 'react';
import ResumePDF from './images/Arjun Khakhs CV - 11_05_22.pdf'
import ResumeJPG from './images/Arjun Khakhs CV - 11_05_221.jpg'

export default function Resume() {
  return (
    <div>
<center>
<h2>Resume!</h2>
    <a href={ResumePDF} download="resumeArj" id="resumeText">Download the PDF</a>
    <div class="resume">
<img src={ResumeJPG} alt="resume" id="resumeid"></img>
</div>
</center>
    </div>
  );
}
