import React from "react";

import PDF from '../assets/Mamed-Gohabur-Developpeur-FullStack.pdf'

import '../stylesheet/Contact.css'

function Contact() {
  return (
    <section id="Contact">
      <div className="PageTags">Contact</div>
      <ul className="ul-info">
        <li className="li-info">
          <a
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
          >
            <button className="btn-info">LinkedIn</button>
          </a>
        </li>
        <li className="li-info">
          <a
            className="a-info"
            href="https://github.com/Mamednoor"
            target="_blank"
          >
            <button className="btn-info">Github</button>
          </a>
        </li>
        <li className="li-info">
          <a className="a-info" href={PDF}>
            <button className="btn-info">Curriculum Vitae</button>
          </a>
        </li>
      </ul>
{/* 
      <div className="profile-links">
          <a href="https://www.linkedin.com/in/mamednoorgohabur/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="https://www.github.com/Mamednoor" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div> */}
    </section>
  );
}

export default Contact;
