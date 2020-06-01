import React from "react";

function About() {
    return (
      <div>
        <ul class="list-inline intro-social-buttons">
          <li>
            <a
            	href="https://github.com/Mamednoor"
              target="_blank"
              class="btn btn-default btn-lg "
            >
              <i class="fa fa-github fa-fw"> </i>
              <span class="network-name">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mamednoorgohabur/"
              target="_blank"
              class="btn btn-default btn-lg"
            >
              <i class="fa fa-linkedin fa-fw"> </i>
              <span class="network-name">Linkedin</span>
            </a>
          </li>
        </ul>
				<hr></hr>
      </div>
    );
  }


export default About;
