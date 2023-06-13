import React from "react";
// import { motion } from "framer-motion";

const SkillsCards = ({ icons }) => {
  const { name, image } = icons;
  return (
    <>
      <div className="pb-2 pt-1">
        <div className=" flex max-w-size flex-col rounded-lg bg-white px-1  shadow-lg ">
          <img src={image} alt={name} className="p-4 lg:p-8" />
          <div className="text-center">
            <p className="pt-1 text-sm capitalize md:text-lg lg:text-lg">
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCards;
