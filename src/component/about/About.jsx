import React from "react";
import Logo from "../../images/logo/logo.png";
import { CgDesignmodo } from "react-icons/cg";
import { BsBookshelf } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import SocialMedia from "../stickyIconBar/SocialMedia";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <SocialMedia />
      <div className="mt-10 items-center px-10 lg:px-0  ">
        <div className="container mx-auto flex max-w-5xl items-center justify-center">
          <div
            className=" flex max-w-lg items-center justify-center p-4 md:mx-auto md:flex md:max-w-lg md:flex-col
         md:flex-wrap lg:max-w-xl"
          >
            <div className="flex flex-col  justify-center">
              <h1 className="pt-4 font-serif text-4xl font-bold capitalize text-black lg:text-5xl ">
                rohit kumar amdahl
              </h1>
              <p className=" font-serif text-lg font-normal text-black">
                Designer and frontend developer
              </p>
              <p className="text-md py-4 font-sans font-normal">
                Hello there! My name is Rohit, and I am a passionate front-end
                developer with a keen eye for design.
              </p>
              <p className="md-w-full py-2 font-sans font-normal md:tracking-wide  lg:w-full lg:tracking-wide">
                With a solid background in design, I bring a unique perspective
                to my development work. Having previously collaborated with
                architects, I gained valuable insights into the world of design
                and architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="md:grid-col-2 mx-auto grid max-w-xl grid-cols-1 gap-4 p-16 md:max-w-xl lg:max-w-5xl lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          type: "spring",
        }}
      >
        <motion.div
          animate={{ rotate: -10, color: "#94004a" }}
          className=" flex items-center justify-center rounded-xl bg-gray-100 p-4 shadow-lg  "
        >
          <div className=" font-normal ">
            <div className="flex items-center justify-center ">
              <FaLaptopCode className="my-2 h-10 w-10 p-1 text-emerald-600" />
              <span className="text-lg font-bold">Developer</span>
            </div>
            <p>
              I delight in coding from scratch and bringing ideas to life on the
              web.
            </p>
          </div>
        </motion.div>
        <div className=" flex items-center justify-center rounded-xl bg-gray-100  p-4 shadow-lg  ">
          <div className=" font-normal ">
            <div className="flex items-center justify-center ">
              <CgDesignmodo className="my-2 h-10 w-10 p-1 text-emerald-600" />
              <span className="text-lg font-bold">Designer</span>
            </div>
            <p>Clean design patterns, and thoughtful interactions.</p>
          </div>
        </div>
        <div className=" flex items-center justify-center rounded-xl bg-gray-100 p-4 shadow-lg ">
          <div className=" font-normal ">
            <div className="flex items-center justify-center ">
              <BsBookshelf className="my-2 h-10 w-10 p-1 text-emerald-600 " />
              <span className="text-lg font-bold">Learning</span>
            </div>
            <p>I have a sincere passion for learning new thing.</p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto flex max-w-lg  justify-end">
        <img src={Logo} alt={Logo} className="max-w-size pb-10" />
      </div>
    </>
  );
};

export default About;
