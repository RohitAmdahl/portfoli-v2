import React from "react";
import skillIcons from "../../helpers/icons";
import SkillsCards from "./SkillsCards";

const MySkills = () => {
  return (
    <section className="container mx-auto max-w-lg pt-10 text-center">
      <div className="text-5xl">
        <h2 className="p-3 font-thin">My Skills</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 p-12 md:grid-cols-3 lg:grid-cols-4 lg:p-0  ">
        {skillIcons.map((icons) => {
          return <SkillsCards key={icons.id} icons={icons} />;
        })}
      </div>
    </section>
  );
};

export default MySkills;
