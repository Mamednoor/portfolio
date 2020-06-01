import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import $ from "jquery";

import '../stylesheet/Home.css'

export function Home() {
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
        <section id = "Accueil" >
            <div className = "BriefBox" >
                <h1> Bienvenue, je suis</h1>
                <p> Mamed Gohabur</p>
                <p id="jobName"/>
								<hr></hr>
            </div>
						
        </section>
    );
}

export function Info() {

  return (
    <section id="Présentation">
      <div className="PageTags">Présentation</div>
			<p className="p-home-section">petite presentation de moi de mes aspirations et mes attentes</p>
			<ul className="ul-social-home">
				<li className='li-home-social'>
					<a href="https://www.linkedin.com/in/mamednoorgohabur/" target="_blank">LinkedIn</a>
				</li>
				<li className='li-home-social'>
					<a href="https://github.com/Mamednoor" target="_blank">Github</a>
				</li>
      </ul>
    </section>
  );
}

export function Skill() {
  return (
    <section id="Compétences">
      <div className="PageTags">Compétences</div>
			<p className="p-home-section">petite presentation de mes competences</p>
    </section>
  );
}

export function Experience() {
  return (
    <section id="Expériences">
      <div className="PageTags">Experiences</div>
			<p className="p-home-section">mon parcours</p>
    </section>
  );
}

