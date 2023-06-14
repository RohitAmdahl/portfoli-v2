import React from "react";
import skillIcons from "../../helpers/icons";
import SkillsCards from "./SkillsCards";
import { motion } from "framer-motion";
const MySkills = () => {
  return (
    <section className="container mx-auto mb-4 max-w-lg pb-8 pt-1 text-center font-serif lg:pb-8 lg:pt-4">
      <div className="pb-2 text-5xl lg:pb-6">
        <h1 className="p-1 font-thin">My Skills</h1>
      </div>
      <motion.div
        className="grid grid-cols-2 gap-3 p-12 md:grid-cols-3 lg:grid-cols-4 lg:p-0 "
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
