import React from "react";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
const Experience = () => {
  return (
    <>
      <div className="pb-2 font-serif text-5xl lg:pb-6">
        <h2 className="mb-10 p-1 text-center font-thin">Experience</h2>
      </div>
      <div className="ml-12 px-5 py-5 md:m-0 lg:m-0 ">
        <div className="flex items-center justify-center ">
          <ol className="container relative mx-auto max-w-xl border-l border-emerald-400  text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <motion.li
              className="mb-10 ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                type: "string",
                duration: 0.9,
                stiffness: 500,
              }}
            >
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <BsPersonWorkspace size={20} />
              </span>
              <span className="text-xl font-bold capitalize text-black">
                Feb. 2021 -July 2021
              </span>
              <p className="text-xl font-bold capitalize text-black ">
                Enerhaugen Arkitektkontor AS
              </p>
              <p className=" text-xl font-bold text-black ">BIM architect</p>
            </motion.li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <BsPersonWorkspace size={20} />
              </span>
              <span className="font-bold capitalize">Okt.2018 - Sep.2020</span>
              <p className="text-xl font-bold capitalize ">Spinn Arkitekt AS</p>
              <p className=" text-xl">Draft man / technical drawing</p>
            </li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <BsPersonWorkspace size={20} />
              </span>
              <span className="font-bold capitalize">Mai.2018 - Aug.2018</span>
              <p className="text-xl font-bold capitalize ">
                Scenario Interior Arkitekt AS
              </p>
              <p className=" text-xl">3D artist and drawings</p>
            </li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <BsPersonWorkspace size={20} />
              </span>
              <span className="font-bold capitalize">Sep.2017 - Feb.2018</span>
              <p className="text-xl font-bold capitalize ">
                Hille Melbye Arkitekter AS
              </p>
              <p className=" text-xl">Technincal drawings / draft man</p>
            </li>
            <li className="mb-10 ml-6">
              <span className=" bg-green-200 dark:bg-green-900 absolute  -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4  ring-red-100  dark:ring-gray-900">
                <BsPersonWorkspace size={20} />
              </span>
              <span className="font-bold capitalize">Jan.2013 - Feb.2015</span>
              <p className="text-xl font-bold capitalize ">Verde box design</p>
              <p className=" text-xl">Designer</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Experience;
