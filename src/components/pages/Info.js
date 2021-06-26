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
import Link from "../common/Link";

import "../stylesheet/Info.css";

import PDF from "../../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf";
import profilePicture from "../../assets/Profile.jpeg";

function Info() {
  return (
    <ContentBody id="Info">
      <Centered>
        <Avatar src={profilePicture} alt="Profile" />
      </Centered>

      <Centered>
        <Text>
          Fort d'une expérience de neuf ans dans la gestion technique et
          maintenance de patrimoine ainsi que le déploiement de produit
          informatique et digital sur le plan national avec l'utilisation de
          plusieurs outils GMAO "Gestion de Maintenance Assistée par
          Ordinateur", j'ai décidé d'acquérir des compétences dans le
          développement web.
        </Text>
      </Centered>

      <Centered>
        <Section style={{ marginBottom: "20px" }}>
          <Link
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined
              style={{ fontSize: "70px", color: "white" }}
              className="icons"
            />
          </Link>

          <Link href={PDF} className="a-info">
            <AuditOutlined
              style={{ fontSize: "70px", color: "white" }}
              className="icons"
            />
          </Link>

          <Link
            href="https://github.com/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined
              style={{ fontSize: "70px", color: "white" }}
              className="icons"
            />
          </Link>

          <Link href="mailto:mamed.gohabur@gmail.com" rel="noopener noreferrer">
            <MailOutlined
              style={{ fontSize: "70px", color: "white" }}
              className="icons"
            />
          </Link>
        </Section>
      </Centered>
    </ContentBody>
  );
}

export default Info;
