import React, { useContext } from "react";
import { CgDesignmodo } from "react-icons/cg";
import { BsBarChartSteps } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import SocialMedia from "../stickyIconBar/SocialMedia";
import { motion } from "framer-motion";
import AppContext from "../../Context/LangContext";
const About = () => {
  const { english } = useContext(AppContext);
  return (
    <>
      <SocialMedia />
      <div className="mt-8 items-center px-10 lg:px-0  ">
        <div className="container mx-auto flex max-w-5xl items-center justify-center">
          <div
            className=" flex max-w-lg items-center justify-center p-4 md:mx-auto md:flex md:max-w-lg md:flex-col
         md:flex-wrap lg:max-w-xl"
          >
            <div className="flex flex-col  justify-center">
              <h1 className=" font-serif text-4xl font-bold capitalize text-black lg:text-5xl ">
                rohit kumar amdahl
              </h1>
              <h2 className=" pt-2 font-serif text-2xl font-normal text-black ">
                {english
                  ? "Frontend developer and Designer"
                  : "Front-end-utvikler og Designer "}
              </h2>
              <p className="text-md py-4 font-sans font-normal">
                {english
                  ? "Hello there! I am a passionate front-end developer with a keen eye for design."
                  : "Heisann! Jeg er en Front-end utvikler som ordentlig brenner for gode visuelle løsninger."}
              </p>
              <p className="md-w-full py-2 font-sans font-normal md:tracking-wide lg:w-full lg:tracking-wide">
                {english
                  ? "With a solid background in design, I bring a unique perspective to my development work. Having previously collaborated with architects,i gained valuable insights into the world of design and architecture. "
                  : "Med en solid bakgrunn i design, tar jeg med meg et unikt perspektiv i verktøykassa som utvikler. Jeg har tidligere jobbet med arkitekter, hvor jeg har fått verdifulle inblikk i design-og arkitektur-universet. "}
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
              <span className="text-lg font-bold">
                {english ? "Developer" : "Utvikler"}
              </span>
            </div>
            <p>
              {english
                ? "I delight in coding from scratch and bringing ideas to life on the web."
                : "Jeg nyter å kunne kode fra bunnen av, og å bringe til live ideer på nettet."}
            </p>
          </div>
        </motion.div>
        <div className=" flex items-center justify-center rounded-xl bg-gray-100  p-4 shadow-lg  ">
          <div className=" font-normal ">
            <div className="flex items-center justify-center ">
              <CgDesignmodo className="my-2 h-10 w-10 p-1 text-emerald-600" />
              <span className="text-lg font-bold">Designer</span>
            </div>
            <p>
              {english
                ? "Clean design patterns, and thoughtful interactions."
                : "Rene designmønstre og gjennomtenkte interaksjoner."}
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center rounded-xl bg-gray-100 p-4 shadow-lg ">
          <div className=" font-normal ">
            <div className="flex items-center justify-center ">
              <BsBarChartSteps className="my-2 h-10 w-10 p-1 text-emerald-600 " />
              <span className="text-lg font-bold">
                {english ? "Fast Learner" : "Lærer fort"}
              </span>
            </div>
            <p>
              {english
                ? "I have a sincere passion for learning new thing."
                : "Jeg har en genuin lidenskap for å lære meg nye ting."}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
