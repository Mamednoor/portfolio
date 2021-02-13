import React from "react";


import Title from "../common/Title";
import Bottom from "../common/Bottom";
import Link from "../common/Link";
import Flex from "../common/Flex";
import Centered from "../common/Centered";

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
    </Bottom>
    </>
  );
}
export default Follow;
