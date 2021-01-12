import React from "react";

import {
  MailOutlined,
  LinkedinOutlined,
  AuditOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import Centered from "../common/Centered";
import ContentBody from "../common/ContentBody";
import Avatar from "../common/Avatar";
import Section from "../common/Section";
import Text from "../common/Text";

import "../stylesheet/Info.css";

import PDF from "../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf";
import profilePicture from "../assets/Profile.jpeg";

function Info() {
  return (
    <ContentBody id="Info">
      <Centered>
        <Section>
          <Avatar src={profilePicture} alt="Profile" />
        </Section>
      </Centered>

      <Centered>
        <Section>
          <Text>
            Fort d’une expérience de 9 ans la gestion technique et maintenance
            de patrimoine ainsi que le déploiement de produit informatique et
            digital sur le plan national avec l’utilisation de plusieurs outils
            GMAO, j’ai décidé d’acquérir des compétences dans le développements
            web.
          </Text>
        </Section>
      </Centered>

      <Centered>
        <Section>
          <a
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
            rel="noopener noreferrer"
            className="a-info"
          >
            <LinkedinOutlined style={{ fontSize: "70px", color: "white" }} className="icon" />
          </a>
          <a href={PDF} className="a-info">
            <AuditOutlined style={{ fontSize: "70px", color: "white" }} />
          </a>
          <a
            href="https://github.com/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
            className="a-info"
          >
            <GithubOutlined style={{ fontSize: "70px", color: "white" }} />
          </a>
          <a
            href="mailto:mamed.gohabur@gmail.com"
            rel="noopener noreferrer"
            className="a-info"
          >
            <MailOutlined style={{ fontSize: "70px", color: "white" }} />
          </a>
        </Section>
      </Centered>
    </ContentBody>
  );
}

export default Info;
