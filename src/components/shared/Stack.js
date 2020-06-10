import React from "react";

import logoReact from "../assets/img/react.svg";
import logoNode from "../assets/img/nodejs.png";
import logoJS from "../assets/img/Js.png";
import logoHtml from "../assets/img/Html.png";
import logoCss from "../assets/img/CSS.png";
import logoGit from "../assets/img/Git.png";
import logoGithub from "../assets/img/Github.png";
import logoMySQL from "../assets/img/Mysql.png";

import "./Stack.css";

function Stack() {
  return (
    <section id="Stack">
      <div className="PageTags">Stacks</div>
      <div className="divstack">
        <ul className="ulstack">
          <li className="listack">
            <img className="imgstack" src={logoReact} alt="React" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoNode} alt="Nodejs" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoJS} alt="JavaScript" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoMySQL} alt="MySQL" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoGit} alt="Git" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoGithub} alt="Github" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoHtml} alt="Html" />
          </li>
          <li className="listack">
            <img className="imgstack" src={logoCss} alt="Css" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stack;
