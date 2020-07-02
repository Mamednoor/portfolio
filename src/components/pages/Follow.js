import React from "react";

import "../stylesheet/Follow.css";

function Follow() {
  return (
    <section id="Follow">
      <div className="PageTags">Suivez-moi</div>
      <ul className="ul-contact">
        <li className="li-contact">
          <a
            className="a-contact"
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="li-contact">
          <a
            className="a-contact"
            href="https://github.com/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className="li-contact">
          <a
            className="a-contact"
            href="https://www.codecademy.com/users/MamedNoor/achievements"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeAcademy
          </a>
        </li>
        <li className="li-contact">
          <a
            className="a-contact"
            href="https://codesandbox.io/u/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeSandbox
          </a>
        </li>
        <li className="li-contact">
          <a
            className="a-contact"
            href="https://www.codewars.com/users/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codewars
          </a>
        </li>
      </ul>
      <p>Crée par Mamed Gohabur</p>
    </section>
  );
}
export default Follow;
