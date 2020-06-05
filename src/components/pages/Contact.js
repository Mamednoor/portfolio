import React from "react";

import "../stylesheet/Contact.css";

function Contact() {
  return (
    <section id="Contact">
      <div className="PageTags">Contact</div>
      <p className='p-contact'>Voici différents liens sur lesquels vous pouvez me suivre et me contacter</p>
      <ul className="ul-info">
        <li className="li-info">
          <a
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-info">LinkedIn</button>
          </a>
        </li>
        <li className="li-info">
          <a
            className="a-info"
            href="https://github.com/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-info">Github</button>
          </a>
        </li>
        <li className="li-info">
          <a 
            className="a-info" 
            href="https://codepen.io/mamednoor"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="btn-info">Codepen</button>
          </a>
        </li>
        <li className="li-info">
          <a
          className="a-info"
          href="https://codesandbox.io/u/Mamednoor"
          target="_blank"
          rel="noopener noreferrer"
          >
            <button className="btn-info">CodeSandbox</button>
          </a>
        </li>
        <li className="li-info">
          <a
            className="a-info"
            href="https://www.codewars.com/users/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="btn-info">Codewars</button>
          </a>
        </li>
        <li className="li-info">
          <a
            className="a-info"
            href="mailto:mamed.gohabur@gmail.com"
            rel="noopener noreferrer"
            >
            <button className="btn-info">Mail</button>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Contact;
