import React from 'react';
import Header from './Header'

function Navigation({ currentPage, handlePageChange }) {
  return (
  <>
  {/* class="navbar navbar-dark bg-dark" */}
  <div id='centered'>
   <nav className="nav nav-tabs navbar-black bg-black">
   <Header />
     <li id='homeTab' className="nav-item"> <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Home')} href="#home" >Home</a> </li>
     <li className="nav-item"> <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('About')}  href="#about">About Me</a>  </li> 
     <li className="nav-item"> <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')} href="#resume">Resume</a>  </li> 
     <li className="nav-item"> <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')} href="#contact">Contact Me</a>  </li>
  </nav>
  </div>
  </>
  );
}

export default Navigation;
