import React from 'react'

import PDF from '../assets/Mamed-Gohabur-Developpeur-FullStack.pdf'

function Info() {

  return (
    <section className="section-content" id="Info">
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

export default Info