import React from "react";
import skillIcons from "../../helpers/icons";
import SkillsCards from "./SkillsCards";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-lg mx-auto container text-center pt-10 pb-10 h-screen"
    >
      <div className="text-5xl py-6 ">
        <h2 className="font-thin p-3">My Skills</h2>
      </div>
      <div className="grid grid-cols-3 p-12 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:p-0  ">
        {skillIcons.map((icons) => {
          return <SkillsCards key={icons.id} icons={icons} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
