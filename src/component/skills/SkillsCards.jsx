import React from "react";
// import { motion } from "framer-motion";

const SkillsCards = ({ icons }) => {
  const { name, image } = icons;
  return (
    <>
      <div className="pb-2 pt-2">
        <div className="flex max-w-size flex-col rounded-lg bg-white px-1  shadow-lg ">
          <img src={image} alt={name} className=" max-[20px]: px-10 py-3" />
          <p className=" p-2 capitalize "> {name} </p>
        </div>
      </div>
    </>
  );
};

export default SkillsCards;
