import React from "react";
import { motion } from "framer-motion";
import { TbSchool } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";
// import { BsPersonWorkspace } from "react-icons/bs";

const Education = () => {
  return (
    <>
      <div className="pb-2 font-serif text-5xl lg:pb-6">
        <h2 className="mb-10 p-1 text-center font-thin">Education</h2>
      </div>
      <div className="ml-12 px-5 py-5 md:m-0 lg:m-0 ">
        <div className="flex items-center justify-center ">
          <ol className=" container relative mx-auto max-w-xl border-l border-emerald-400  text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <motion.li
              className="mb-10 ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                type: "string",
                duration: 0.9,
                stiffness: 120,
              }}
            >
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <TbSchool size={20} />
              </span>
              <span className="text-xl font-bold capitalize text-black">
                2021 okt - 2023 okt
              </span>
              <p className="text-xl font-bold capitalize text-black ">
                Frontend utvikling
              </p>
              <p className=" text-xl font-bold text-black ">
                Noroff school of technology and digital media
              </p>
            </motion.li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <TbSchool size={20} />
              </span>
              <span className="font-bold capitalize">2009 - 2013</span>
              <p className="text-xl font-bold capitalize ">
                Bachelor in design
              </p>
              <p className=" text-xl">
                National institute of fashion technology
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <FaSchool size={20} />
              </span>
              <span className="font-bold capitalize">Course in 2019</span>
              <p className="text-xl font-bold capitalize ">
                Open BIM-IFC Archicad videregående
              </p>
              <p className=" text-xl">Graphisoft Norge</p>
            </li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <FaSchool size={20} />
              </span>
              <span className="font-bold capitalize">Course in 2017</span>
              <p className="text-xl font-bold capitalize ">Autocad and Revit</p>
              <p className=" text-xl">Cad Consult AS</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Education;
