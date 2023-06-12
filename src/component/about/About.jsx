import React from "react";
// import Picture from "../../images/myself.png";
import Logo from "../../images/logo/logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";
// import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgDesignmodo } from "react-icons/cg";
import { BsBookshelf } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="fixed p-4 mt-80 pt-14 lg:mt-56 text-black  ">
        <ul className=" flex justify-center flex-col gap-3 py-10 lg:py-5">
          <li className="py-2  cursor-pointer hover:animate-bounce ">
            <a href="https://www.facebook.com/" className="hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
          </li>
          <li className="py-2 cursor-pointer hover:animate-bounce ">
            <a
              href="https://www.linkedin.com/in/rohit-kumar-amdahl-308047140/"
              className="hover:text-blue-600"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="py-2 cursor-pointer hover:animate-bounce ">
            <a
              href="https://github.com/RohitAmdahl"
              className="hover:text-blue-600"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="py-2 cursor-pointer hover:animate-bounce ">
            <a
              href="https://www.instagram.com/"
              className="hover:text-red-600   "
            >
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
        <div className=" h-20 w-0.5 bg-green  mx-auto"></div>
      </div>
      <div className="px-8 lg:px-0 mt-10 ">
        <div className="container mx-auto max-w-5xl font-poppins">
          <div
            className=" max-w-lg flex items-center justify-center md:flex md:flex-col md:flex-wrap md:max-w-lg md:mx-auto
         p-4 lg:max-w-xl"
          >
            <div className="flex flex-col justify-center">
              <h1 className="capitalize font-bold text-black text-4xl pt-4 lg:text-5xl font-serif ">
                rohit kumar amdahl
              </h1>
              <p className=" font-normal text-black font-serif text-lg">
                Designer and frontend developer
              </p>
              <p className="py-4 text-md font-normal font-sans">
                Hello there! My name is Rohit, and I am a passionate front-end
                developer with a keen eye for design.
              </p>
              <p className="py-2 font-normal font-sans lg:tracking-wide md:tracking-wide  lg:w-full md-w-full">
                With a solid background in design, I bring a unique perspective
                to my development work. Having previously collaborated with
                architects, I gained valuable insights into the world of design
                and architecture.
              </p>

              <div className="w-full flex justify-end">
                <img src={Logo} alt={Logo} className="pt-4 max-w-size" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 p-16 gap-4 max-w-md mx-auto md:grid-col-2 lg:grid-cols-3 md:max-w-lg lg:max-w-5xl">
        <div className=" shadow-lg flex justify-center items-center bg-white p-4 rounded-xl ">
          <div className=" font-normal ">
            <div className="flex justify-center items-center ">
              <FaLaptopCode className="w-10 h-10 p-1 my-2 text-emerald-600" />
              <span className="font-bold text-lg">Developer</span>
            </div>
            <p>
              I delight in coding from scratch and bringing ideas to life on the
              web.
            </p>
          </div>
        </div>
        <div className=" shadow-lg flex justify-center items-center bg-white p-4 rounded-xl ">
          <div className=" font-normal ">
            <div className="flex justify-center items-center ">
              <CgDesignmodo className="w-10 h-10 p-1 my-2 text-emerald-600" />
              <span className="font-bold text-lg">Designer</span>
            </div>
            <p>Clean design patterns, and thoughtful interactions.</p>
          </div>
        </div>
        <div className="shadow-lg flex justify-center items-center bg-white p-4 rounded-xl">
          <div className=" font-normal ">
            <div className="flex justify-center items-center ">
              <BsBookshelf className="w-10 h-10 p-1 my-2 text-emerald-600 " />
              <span className="font-bold text-lg">Learning</span>
            </div>
            <p>I have a sincere passion for learning new thing.</p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 max-w-sm mx-auto container p-3">
        <div className="max-w-size  mx-auto bg-white text-green container text-center items-center py-4 rounded-full shadow-md border-2 border-gray-400 text-lg  lg:max-w-xs md:max-w-xs ">
          <a href="#projects" className=" mt-10 ">
            <span className="flex items-center justify-center  gap-2 font-bold animate-bounce hover:animate-none lg:gap-4  ">
              <AiOutlineArrowDown size={25} className=" " />
              My work
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
