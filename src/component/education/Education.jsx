import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      <div className="pb-2 font-serif text-5xl lg:pb-6">
        <h2 className="p-1 text-center font-thin">Education</h2>
      </div>
      <div className="px-10">
        <motion.div
          className="m-3 mx-auto flex max-w-xl justify-around rounded-full bg-white p-4 pt-10 shadow-lg lg:max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.1,
            duration: 0.5,
            type: "spring",
          }}
        >
          <div className=" items-center ">
            <span className="font-bold capitalize">2021 okt - 2023 okt</span>
            <p className="text-xl font-bold capitalize ">Frontend utvikling</p>
          </div>
          <div className=" h-24  w-0.5 bg-green"></div>
          <div className="text-lg">
            <p className="px-2 text-xl">
              Noroff school of technology and digital media
            </p>
            <p className="px-2 text-xl">Noroff Oslo</p>
          </div>
        </motion.div>
        <div className="m-3 mx-auto flex max-w-lg justify-around rounded-full bg-white p-4 pt-10  lg:max-w-2xl ">
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
        <div className="m-3 mx-auto flex max-w-lg justify-around rounded-full bg-white p-4 pt-10   lg:max-w-2xl ">
          <div className="text-lg">
            <p>Cad Consult AS</p>
          </div>
          <div className="  h-14 w-0.5  bg-green"></div>
          <div className=" ">
            <span className=" capitalize">2017</span>
            <p className="font-bold capitalize ">Autocad and Revit</p>
          </div>
        </div>
        <div className="m-3 mx-auto flex max-w-lg justify-around rounded-full bg-white p-4 pt-10  lg:max-w-2xl ">
          <div className="text-lg">
            <p>National institute of fashion technology </p>
          </div>
          <div className="  h-14 w-0.5  bg-green"></div>
          <div>
            <span className="px-2  capitalize">2009 - 2013</span>
            <p className="px-2 font-bold capitalize ">Bachelor in design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
