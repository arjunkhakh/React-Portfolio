import React from 'react';

const refresh = () => {
  window.location.reload();
}

export default function Contact() {
  return (
    <div>
      <center>
      Contact Me Here and I wil get back to you.
      <form className="form">
      <input
          name="name"
          type="text"
          placeholder="Name"
        />
        <br></br>
        <input
          name="email"
          type="email"
          placeholder="Email"
        />
        <br></br>
        <input
          name="text"
          type="text"
          placeholder="Message"
        />
        <br></br>
        <br></br>
        <button type="button" onClick={refresh}>Submit</button>
      </form>
      </center>
      
    </div>
  );
}


