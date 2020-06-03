import React from 'react'

import PDF from '../assets/Mamed-Gohabur-Developpeur-FullStack.pdf'
import '../stylesheet/Info.css'

function Info() {

  return (
    <section id="Info">
      <div className="PageTags">Présentation</div>
				<p className="p-contain">
					Aillant travaillé dans plusieurs domaines d'activité tel que hôtellerie et l'informatique ainsi que le milieu de la santé,
					ou j'ai pu apprendre différentes méthodologies de travail et où j'ai pu manager des équipes de techniciens et de sous-traitant.
					ces diverses experiences qui m'ont permis de grandir professionnellement en acquérant de nouvelle compétences.
					l'autonomie, la curiosité ainsi que la proactivité sont des atouts qui m'ont permis d’évoluer dans mon parcours. Je vous laisse prendre connaissance plus en détails de mon profil avec les liens 	ci-dessous.
				</p>
				<ul className="ul-info">
					<li className='li-info'>
						<a href="https://www.linkedin.com/in/mamednoorgohabur/" target="_blank"><button className="btn-info">LinkedIn</button></a>
					</li>
					<li className='li-info'>
						<a className="a-info" href="https://github.com/Mamednoor" target="_blank"><button className="btn-info">Github</button></a>
					</li>
					<li className='li-info'>
						<a className="a-info" href={PDF}><button className="btn-info">Curriculum Vitae</button></a>
					</li>
      	</ul>
    </section>
  );
}

export default Info