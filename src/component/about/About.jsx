import React from "react";
import Picture from "../../images/myself.png";
import Logo from "../../images/logo/logo.png";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className=" fixed p-4 mt-64 lg:mt-56">
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
              className="hover:text-blue-600   "
            >
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
        <div className=" h-20 w-0.5 bg-green  mx-auto"></div>
      </div>

      <div className="">
        <div className="container mx-auto max-w-5xl font-poppins">
          <div
            className=" md:flex md:flex-col md:flex-wrap md:max-w-lg md:mx-auto
         p-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-3 lg:max-w-5xl"
          >
            <div className="">
              <h1 className="capitalize font-bold text-black text-4xl pt-4 lg:text-5xl font-serif">
                rohit kumar amdahl
              </h1>
              <p className=" font-normal text-black font-serif">
                Designer and frontend developer
              </p>
              <p className="py-4 text-md font-normal font-sans">
                Hello there! My name is Rohit, and I am a passionate front-end
                developer with a keen eye for design.
              </p>
              <p className="py-2font-normal font-sans">
                With a solid background in design, I bring a unique perspective
                to my development work. Having previously collaborated with
                architects, I gained valuable insights into the world of design
                and architecture.
              </p>
              <div className="w-full flex justify-end">
                <img src={Logo} alt={Logo} className="pt-4" />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <img src={Picture} alt={Picture} className="p-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
