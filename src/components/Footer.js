import React from 'react';
import github from './pages/images/github link.png'
import linkdin from './pages/images/linkdin.png'
import mail from './pages/images/mail.png'

function Footer() {
  return (
    <>    
    <footer id='centered'>
    <a href='https://github.com/arjunkhakh/Market-Watch'><img id="githubicon" class="card-img-top" src={github} alt="Market Watch Github"></img></a>
    <a href='https://www.linkedin.com/in/arjun-khakh-117757225/'><img id="linkicon" class="card-img-top" src={linkdin} alt="Market Watch Visual"></img></a>
    <a href='mailto:arjunkhakh@gmail.com'><img id="mailicon" class="card-img-top" src={mail} alt="Market Watch Visual"></img></a>
    </footer>
  </>
  );
}

export default Footer;