import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      <div className="pb-2 font-serif text-5xl lg:pb-6">
        <h2 className="p-1 text-center font-thin">Education</h2>
      </div>
      <motion.div
        className="m-3 mx-auto flex max-w-2xl justify-around rounded-3xl bg-white p-4 pt-10 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, color: "#a20553" }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          type: "spring",
        }}
      >
        <div className=" items-center ">
          <span className="font-bold capitalize">2021 okt - 2023 okt</span>
          <p className="font-bold capitalize ">Frontend utvikling</p>
        </div>
        <div className=" h-24  w-0.5 bg-green"></div>
        <div className="text-lg">
          <p className="px-2">Noroff school of technology and digital media</p>
        </div>
      </motion.div>
      <div className="m-3 mx-auto flex max-w-2xl justify-around rounded-3xl bg-white p-4 pt-10 shadow-lg ">
        <div className="text-lg">
          <p className="px-2">Graphisoft Norge </p>
        </div>
        <div className=" h-14 w-0.5  bg-green"></div>
        <div>
          <span className="px-2  capitalize">2019</span>
          <p className="px-2 font-bold capitalize ">
            Open BIM-IFC Archicad videregående
          </p>
        </div>
      </div>
      <div className="m-3 mx-auto flex max-w-2xl justify-around rounded-3xl bg-white p-4 pt-10 shadow-lg ">
        <div className="text-lg">
          <p>Cad Consult AS</p>
        </div>
        <div className="  h-14 w-0.5  bg-green"></div>
        <div className=" ">
          <span className=" capitalize">2017</span>
          <p className="font-bold capitalize ">Autocad and Revit</p>
        </div>
      </div>
      <div className="m-3 mx-auto flex max-w-2xl justify-around rounded-3xl bg-white p-4 pt-10 shadow-lg ">
        <div className="text-lg">
          <p>National institute of fashion technology </p>
        </div>
        <div className="  h-14 w-0.5  bg-green"></div>
        <div className=" ">
          <span className="px-2  capitalize">2009 - 2013</span>
          <p className="px-2 font-bold capitalize ">Bachelor in design</p>
        </div>
      </div>
    </>
  );
};

export default Education;
