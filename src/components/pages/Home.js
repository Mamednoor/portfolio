import React, { useEffect } from "react";
import $ from "jquery";

import "../stylesheet/Home.css";

function Home() {
  const JobName = ["Développeur Fullstack", "React, Node.js, JavaScript"];
  let JobNameCount = 0;
  let JobCharCount = 0;
  let JobString = "";
  let Flag = 0;
  let keep = 0;

  useEffect(() => {
    let Interval = setInterval(function () {
      switch (Flag) {
        case 0:
          if (JobCharCount < JobName[JobNameCount].length) {
            JobString += JobName[JobNameCount][JobCharCount];
            $("#jobName").html(JobString);
            JobCharCount++;
            $("#jobName").html(JobString);
          } else if (JobCharCount === JobName[JobNameCount].length) {
            Flag = 2;
            $("#jobName").html(JobString);
          }
          break;
        case 1:
          if (JobCharCount > 0) {
            JobString = JobString.substring(0, JobString.length - 1);
            JobCharCount--;
            $("#jobName").html(JobString);
          } else if (JobCharCount === 0) {
            Flag = 2;
            JobNameCount++;
            if (JobNameCount === JobName.length) {
              JobNameCount = 0;
            }
          }
          break;
        case 2:
          if (keep < 5) {
            keep++;
          } else if (keep === 5) {
            Flag = 1;
            keep++;
          } else if (keep < 10) {
            keep++;
          } else {
            Flag = 0;
            keep = 0;
          }
          break;
        default:
          break;
      }
    }, 90);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return (
    <section id="Home">
      <div className="BriefBox">
        <h1>Mamed Gohabur</h1>
        <p id="jobName" />
      </div>
    </section>
  );
}

export default Home;
