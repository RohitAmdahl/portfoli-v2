import React from "react";
import skillIcons from "../../helpers/icons";
import SkillsCards from "./SkillsCards";
import { motion } from "framer-motion";
const MySkills = () => {
  return (
    <section className="container mx-auto mb-4 max-w-lg items-center pb-8 text-center font-serif md:max-w-2xl lg:max-w-4xl lg:pb-8  ">
      <div className="pb-2 text-5xl lg:pb-6">
        <h1 className="pb-5 pt-6 font-thin">My Skills</h1>
      </div>
      <motion.div
        className=" container mx-auto grid grid-cols-2 items-center gap-3 p-12 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-5 lg:p-3 "
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        {skillIcons.map((icons) => {
          return <SkillsCards key={icons.id} icons={icons} />;
        })}
      </motion.div>
    </section>
  );
};

export default MySkills;
