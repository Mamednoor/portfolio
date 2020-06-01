import React from "react";
import '../stylesheet/About.css'

function About() {
    return (
      <div>
        <ul className="list-inline intro-social-buttons">
          <li>
            <a
          		href="https://github.com/Mamednoor"
              target="_blank"
              className="btn btn-default btn-lg "
            >
              <span class="network-name">Github</span>
            </a>
          </li>
          <li>
            <a
							type='button'
              href="https://www.linkedin.com/in/mamednoorgohabur/"
              target="_blank"
              className="btn btn-default btn-lg"
            >
              <span className="network-name">LinkedIn</span>
            </a>
          </li>
        </ul>
				<hr></hr>
      </div>
    );
  }


export default About;
