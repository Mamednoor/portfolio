import React from "react";

import "../stylesheet/Experience.css";

function Experience() {
  return (
    <section className="section-content" id="Experience">
      <div className="PageTags">Experiences</div>
      <div class="wrapper">
        <div class="timeline">
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">Wild Code School - Mars 2020</dt>
            <dd class="hr-guide-step_text">Développeur web et web mobile</dd>
          </dl>
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">
              Dalkia - Février 2019 à Janvier 2020
            </dt>
            <dd class="hr-guide-step_text">Manager</dd>
          </dl>
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">
              Infoway - Août 2018 à Fevrier 2019
            </dt>
            <dd class="hr-guide-step_text">Responsable Technique</dd>
          </dl>
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">
              Ibis Bercy village - Juin 2015 à Décembre 2017
            </dt>
            <dd class="hr-guide-step_text">Responsable Technique</dd>
          </dl>
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">
              Mercure Paris centre Tour Eiffel - Septembre 2011 à Juin 2015
            </dt>
            <dd class="hr-guide-step_text">Assistant Responsable Technique</dd>
          </dl>
          <dl class="hr-guide-step">
            <dt class="hr-guide-step_title">Cegelec</dt>
            <dd class="hr-guide-step_text">
              Septembre 2008 à Août 2011 - Technicien de Maintenance
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Experience;
