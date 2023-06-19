import React from "react";
import TagsIcons from "./TagsIcons";
import { useNavigate } from "react-router-dom";
import { HiOutlineLink } from "react-icons/hi";
import LinksIcons from "./LinksIcons";
import { motion } from "framer-motion";
const ProjectCards = ({ project }) => {
  const { id, image, title, tags, linkProject } = project;

  const navigate = useNavigate();
  function handleClick() {
    // navigate("/project/" + id);
    navigate(`/project/${id}`);
  }
  return (
    <>
      <div className="dark:bg-gray-800p-4 container mx-auto max-w-lg rounded-3xl bg-gray-100 p-8 duration-300 ease-in-out hover:shadow-2xl hover:shadow-zinc-400 dark:border-gray-700 lg:px-10 lg:py-6">
        <div className="container mx-auto pt-3">
          <motion.h5
            className="mb-2 px-2 text-center font-serif text-2xl font-bold capitalize tracking-tight  text-black  dark:text-white"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2.5, type: "spring", stiffness: 30 }}
          >
            {title}
          </motion.h5>
          <motion.div
            className=" flex items-center justify-center"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 30 }}
          >
            <TagsIcons key={tags.id} tags={tags} />
          </motion.div>
        </div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 30 }}
        >
          <img
            className="w-full max-w-sm rounded-t-lg p-6 md:max-w-xl lg:max-w-2xl"
            src={image}
            alt={title}
          />
        </motion.div>
        <div className=" container mx-auto max-w-md pb-4 lg:max-w-lg">
          <div
            onClick={handleClick}
            className=" flex cursor-pointer items-center justify-center  gap-2 rounded-full bg-green px-2 py-2 shadow-md shadow-black"
          >
            <HiOutlineLink className="text-white" size={20} />
            <button
              type="button"
              className="cursor-pointer text-lg capitalize text-white"
            >
              read more
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-1 py-5 text-center">
          <LinksIcons key={linkProject.id} linkProject={linkProject} />
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
