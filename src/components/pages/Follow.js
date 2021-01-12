import React from "react";
import Title from "../common/Title";

import "../stylesheet/Follow.css";

function Follow() {
  return (
    <section id="Follow">
      <Title>Suivez-moi</Title>
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
      </ul>
    </section>
  );
}
export default Follow;
