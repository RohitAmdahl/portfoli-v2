// import React, { useContext } from "react";
import TagsIcons from "./TagsIcons";

import LinksIcons from "./LinksIcons";
import AppContext from "../../Context/LangContext";
const ProjectCards = ({ project }) => {
  // const { english } = useContext(AppContext);
  const { image, title, tags, linkProject, description } = project;
  console.log(description);

  return (
    <>
      <div className="  container mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gray-100 p-8 text-black duration-300 ease-in-out hover:shadow-2xl  hover:shadow-zinc-400 dark:border-gray-700 lg:px-10 lg:py-6">
        <div className="container mx-auto pt-3 text-black">
          <h5 className="mb-2 px-2 text-center font-serif text-2xl font-bold capitalize tracking-tight  text-black">
            {title}
          </h5>
          <div className=" flex items-center justify-center">
            <TagsIcons key={tags.id} tags={tags} />
          </div>
        </div>
        <img
          className=" container mx-auto w-full max-w-sm   rounded-t-lg p-6 md:max-w-4xl lg:max-w-2xl"
          src={image}
          alt={title}
        />
        <div className="flex  items-center justify-center">
          <div>
            <p>{description}</p>
          </div>
        </div>

        <div className="flex justify-between gap-1 py-3 text-center">
          <LinksIcons key={linkProject.id} linkProject={linkProject} />
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
