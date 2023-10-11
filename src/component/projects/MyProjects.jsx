import React from "react";
import projectData from "../../helpers/projects";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";
const MyProjects = () => {
  return (
    <div className="mt-2 px-2 py-4 lg:mt-4 lg:px-4 lg:py-8 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "string",
          duration: 0.9,
        }}
        className="container mx-auto grid max-w-xl grid-cols-1  gap-4 md:max-w-3xl md:grid-cols-1 md:gap-5 lg:max-w-4xl lg:grid-cols-1 lg:gap-8 "
      >
        {projectData.map((project) => {
          return (
            <ProjectCards
              key={project.id}
              project={project}
              className="overflow-hidden"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MyProjects;
