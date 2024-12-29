import { useState } from "react";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyles.js";
import ProjectCard from "../Cards/ProjectCard.jsx";
import { projects } from "../../data/constants.js";

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value='all' onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value='all' onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value='web app'
              onClick={() => setToggle("web app")}
            >
              Web App
            </ToggleButton>
          ) : (
            <ToggleButton value='web app' onClick={() => setToggle("web app")}>
              Web App
            </ToggleButton>
          )}
        </ToggleButtonGroup>
      </Wrapper>
      <CardContainer>
        {toggle === "all" &&
          projects.map((project) => <ProjectCard project={project} />)}
        {projects
          .filter((item) => item.category === toggle)
          .map((project) => (
            <ProjectCard project={project} />
          ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
