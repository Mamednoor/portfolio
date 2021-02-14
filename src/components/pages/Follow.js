import React from "react";

import Title from "../common/Title";
import Bottom from "../common/Bottom";
import Link from "../common/Link";

import "../stylesheet/Follow.css";

function Follow() {

  return (
    <>
    <Title id="Follow">Suivez-moi</Title>
    <Bottom>
      <Link
        href="https://www.linkedin.com/in/mamednoorgohabur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
      <Link
        href="https://github.com/Mamednoor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <Link
        href="mailto:mamed.gohabur@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </Link>
    </Bottom>
    </>
  );
}
export default Follow;
