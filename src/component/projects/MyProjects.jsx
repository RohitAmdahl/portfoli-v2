import React from "react";
import projectData from "../../helpers/projects";
import ProjectCards from "./ProjectCards";

const MyProjects = () => {
  return (
    <div className="mt-2 px-2 py-4 lg:mt-4 lg:px-4 lg:py-8 ">
      <div className="container mx-auto grid max-w-lg grid-cols-1  gap-4 md:max-w-3xl md:grid-cols-1 md:gap-5 lg:max-w-5xl lg:grid-cols-2 lg:gap-8 ">
        {projectData.map((project, id) => {
          return (
            <ProjectCards
              id={id}
              title={project.title}
              key={project.id}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
