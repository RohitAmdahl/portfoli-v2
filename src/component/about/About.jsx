import React from "react";
import Picture from "../../images/myself.png";
import Logo from "../../images/logo/logo.png";
const About = () => {
  return (
    <div className=" text-black ">
      <ul className="flex flex-col ">
        <li>facebook</li>
        <li>facebook</li>
        <li>facebook</li>
        <li>facebook</li>
      </ul>
      <div className="container mx-auto max-w-5xl font-poppins">
        <div
          className=" md:flex md:flex-col md:flex-wrap md:max-w-lg md:mx-auto
         p-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-3 lg:max-w-5xl"
        >
          <div className="">
            <h1 className=" capitalize font-bold text-black text-4xl pt-4 lg:text-5xl  ">
              rohit kumar amdahl
            </h1>
            <p className=" font-normal text-black">
              Designer and frontend developer
            </p>
            <p className="py-4 text-md font-normal">
              Hello there! My name is Rohit, and I am a passionate front-end
              developer with a keen eye for design.
            </p>
            <p className="py-2font-normal">
              With a solid background in design, I bring a unique perspective to
              my development work. Having previously collaborated with
              architects, I gained valuable insights into the world of design
              and architecture. This experience has enriched my understanding of
              space, form, and visual composition, allowing me to approach my
              projects with a holistic and thoughtful mindset.
            </p>
            <div className="w-full flex justify-end">
              <img src={Logo} alt="my logo" className="pt-4 " />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img src={Picture} alt="photo of myself" className="p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
