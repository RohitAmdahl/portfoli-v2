import React from "react";

const ProjectCards = ({ project }) => {
  const { image, title } = project;
  return (
    <>
      <div className="dark:bg-gray-800p-4 container m-3 mx-auto max-w-lg rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700">
        <img className=" rounded-t-lg" src={image} alt={title} />
        <div className="container mx-auto p-5">
          <h5 className="mb-2 text-2xl font-bold capitalize tracking-tight text-black dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
