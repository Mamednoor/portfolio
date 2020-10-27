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
      </ul>
    </section>
  );
}
export default Follow;
