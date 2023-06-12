import React from "react";

const SkillsCards = ({ icons }) => {
  const { name, image } = icons;
  return (
    <>
      <div className="bg-white flex flex-col max-w-size shadow-lg rounded-lg px-1 ">
        <img src={image} alt={name} className=" max-[20px]: px-10 py-3" />
        <p className=" capitalize p-2 "> {name} </p>
      </div>
    </>
  );
};

export default SkillsCards;
