import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../../helpers/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const data = projectData[id];

  return (
    <>
      <div className="container mx-auto max-w-4xl pt-8 text-center font-serif  text-3xl">
        <h1 className="text-bold pb-10 text-4xl capitalize">{data.title}</h1>
        <div>
          <img
            src={data.image}
            alt={data.title}
            className=" container mx-auto w-full max-w-4xl p-7"
          />
        </div>
      </div>
      <div className="container mx-auto max-w-2xl p-4 text-start">
        <p className="px-6 py-5 font-serif text-4xl capitalize">description</p>

        <p className="p-6 pl-10 pr-2 text-lg"> {data.description} </p>
      </div>
      <div className="container mx-auto max-w-2xl p-4 text-start">
        <p className=" px-6 py-5 font-serif text-4xl capitalize">
          "the things I learned"
        </p>
        <p className=" py-3 pl-10 pr-2 text-lg"> {data.learning} </p>
      </div>
    </>
  );
};

export default ProjectDetail;
