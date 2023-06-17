import React from "react";

const ProjectCards = ({ project }) => {
  const { image, title } = project;
  return (
    <>
      <div className="dark:bg-gray-800p-4 text-sans container m-3 mx-auto max-w-lg  rounded-lg  shadow dark:border-gray-700 ">
        <div className="container mx-auto p-5">
          <h5 className="mb-2 text-2xl font-bold capitalize tracking-tight text-black dark:text-white">
            {title}
          </h5>
        </div>
        <img className="rounded-t-lg" src={image} alt={title} />
      </div>
    </>
  );
};

export default ProjectCards;
