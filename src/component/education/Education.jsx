import React from "react";

const Education = () => {
  return (
    <>
      <div className="pb-2 font-serif text-5xl lg:pb-6">
        <h2 className="p-1 text-center font-thin">Education</h2>
      </div>
      <div className="m-3 mx-auto flex max-w-2xl justify-around bg-white p-4 pt-10">
        <div className=" items-center ">
          <span className="font-bold capitalize">2021 okt - 2023 okt</span>
          <p className="font-bold capitalize ">Frontend utvikling</p>
        </div>
        <div className=" mx-auto h-20 w-0.5  bg-green"></div>
        <div className="text-lg">
          <p>Noroff school of technology and digital media</p>
        </div>
      </div>
      <div className="m-3 mx-auto flex max-w-2xl justify-around bg-white p-4 pt-10 ">
        <div className="text-lg">
          <p>National institute of fashion technology </p>
        </div>
        <div className=" mx-auto h-20 w-0.5  bg-green"></div>
        <div className="">
          <span className="font-bold capitalize">2009 - 2013</span>
          <p className="font-bold capitalize ">Bachelor in design</p>
        </div>
      </div>
    </>
  );
};

export default Education;
