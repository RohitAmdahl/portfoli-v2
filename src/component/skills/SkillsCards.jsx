import React from "react";
// import { motion } from "framer-motion";
const SkillsCards = ({ icons }) => {
  const { name, image } = icons;
  return (
    <div className="max-w-lg pb-2 pt-4 ">
      <div className=" rounded-lg bg-gray-200 p-3 ">
        <img src={image} alt={name} className="mx-auto max-w-small" />
        <div className=" flex items-center justify-center text-center">
          <p className="p-2 pt-1 text-sm capitalize md:text-lg lg:text-lg">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
