import React from "react";
// import { motion } from "framer-motion";
const SkillsCards = ({ icons }) => {
  const { name, image } = icons;
  return (
    <>
      <div className="max-w-xs pb-2 pt-1">
        <div className="flex max-w-size flex-col justify-center rounded-lg bg-white px-1 py-2  shadow-lg ">
          <img src={image} alt={name} className="mx-auto max-w-small" />
          <div className="text-center">
            <p className="pb-2 pt-1 text-sm capitalize md:text-lg lg:text-lg">
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCards;
