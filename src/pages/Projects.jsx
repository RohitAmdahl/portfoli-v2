import React from "react";
import SocialMedia from "../component/stickyIconBar/SocialMedia";
import ProjectCards from "../component/projects/ProjectCards";
import ApiHook from "../api/ApiHook";

const Projects = () => {
  return (
    <>
      <SocialMedia />
      <ProjectCards />
      <ApiHook />
    </>
  );
};

export default Projects;
