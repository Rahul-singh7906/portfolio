import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import rpa from "../../Assets/Projects/rpa.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpa}
              isBlog={false}
              title="Deltan RPA"
              description="Developed an end-to-end desktop automation tool for the Japanese company DELTAN. I used PyAutoGUI and PyWinAuto to streamline the conversion of proprietary client .DCM files to .STL format via Meditlink software "  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Monitor APP RPA"
              description="Engineered an intelligent file detection system to automatically identify and
              process new patient data stored locally on PCs and  Implemented seamless two-way data communication with the client’s database,
              ensuring real-time data synchronization and operational efficiency"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hira"
              description="Collaborated in a team of 5 to develop a Japanese image-selling site, Project
              Hira. Utilized Quasar,Vue.js, and Firebase for the development and deployment of
              the site Handled database queries and operations using Firebase, ensuring efficient
              data management"           
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
