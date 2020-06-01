import React, { useEffect } from "react";
import $ from "jquery";

import PDF from '../assets/Mamed-Gohabur-Developpeur-FullStack.pdf'

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
                <h2> Bienvenue, je suis</h2>
                <h1> Mamed Gohabur</h1>
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
      <div className="div-home">
				<p className="p-home-section">
				Aillant travaillé dans plusieurs domaines d'activité tel que hôtellerie et l'informatique ainsi que le milieu de la santé, ou j'ai pu apprendre différentes 		méthodologies de travail et où j'ai pu manager des équipes de techniciens et de sous-traitant.
				ces diverses experiences qui m'ont permis de grandir professionnellement en acquérant de nouvelle compétences.
				l'autonomie, la curiosité ainsi que la proactivité sont des atouts qui m'ont permis d’évoluer dans mon parcours. Je vous laisse prendre connaissance plus en détails de mon profil avec les liens 	ci-dessous.
				</p>
			</div>
      <div className="div-info">
				<ul className="ul-info">
					<li className='li-info'>
						<a href="https://www.linkedin.com/in/mamednoorgohabur/" target="_blank"><button>LinkedIn</button></a>
					</li>
					<li className='li-info'>
						<a className="a-info" href="https://github.com/Mamednoor" target="_blank"><button>Github</button></a>
					</li>
					<li className='li-info'>
						<a className="a-info" href={PDF}><button>Curriculum Vitae</button></a>
					</li>
      	</ul>
			</div>
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

