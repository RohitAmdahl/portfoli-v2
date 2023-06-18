import React from "react";
import projectData from "../../helpers/projects";
import ProjectCards from "./ProjectCards";
const MyProjects = () => {
  return (
    <div className="mt-4 px-4 py-8 ">
      <div className="container mx-auto grid max-w-lg grid-cols-1  gap-4 md:max-w-3xl md:grid-cols-1 md:gap-5 lg:max-w-5xl lg:grid-cols-2 lg:gap-4 ">
        {projectData.map((project) => {
          return <ProjectCards key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default MyProjects;
