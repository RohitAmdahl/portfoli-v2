import React from "react";
import TagsIcons from "./TagsIcons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProjectCards = ({ project }) => {
  const { id, image, title, tags } = project;
  const navigate = useNavigate();
  function handleClick() {
    // navigate("/project/" + id);
    navigate(`/project/${id}`);
  }
  return (
    <div className="dark:bg-gray-800p-4 container mx-auto max-w-lg rounded-3xl bg-white duration-300 ease-in-out hover:shadow-2xl hover:shadow-zinc-400 dark:border-gray-700 lg:px-10 lg:py-6 ">
      <div className="container mx-auto">
        <h5 className="mb-2 px-2 text-center font-serif text-2xl font-bold capitalize tracking-tight  text-black  dark:text-white">
          {title}
        </h5>
        <div className=" flex items-center justify-center">
          <TagsIcons key={tags.id} tags={tags} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-full max-w-sm rounded-t-lg p-6 md:max-w-xl lg:max-w-2xl"
          src={image}
          alt={title}
        />
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          read more
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
