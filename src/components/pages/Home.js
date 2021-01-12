import React from "react";

import Animation from '../common/Animation/animation'
import H1 from '../common/H1'
import H2 from '../common/H2'
import BriefBox from '../common/BriefBox'
import Main from '../common/Main'

import "../stylesheet/Home.css";

function Home() {

  return (
    <Main id="Home">
      <BriefBox>
        <H1>Mamed Gohabur</H1>
        <H2>
          <Animation />
        </H2>
      </BriefBox>
    </Main>
  );
}

export default Home;