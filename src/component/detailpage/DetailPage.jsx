import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../../helpers/projects";
import LinksIcons from "../projects/LinksIcons";
const ProjectDetail = () => {
  const { id } = useParams();
  const data = projectData[id];

  return (
    <>
      <div className="container mx-auto max-w-4xl pt-8 text-center font-serif  text-3xl">
        <h1 className="text-bold pb-10 text-4xl capitalize ">{data.title}</h1>
        <div>
          <img
            src={data.image}
            alt={data.title}
            className=" container mx-auto w-full max-w-4xl p-7"
          />
        </div>
      </div>
      <div className="container mx-auto max-w-xl p-4 text-start">
        <p className="py-5 font-serif text-4xl capitalize">description</p>

        <p className="text-lg"> {data.description} </p>
      </div>
      <div className="container mx-auto max-w-xl p-4 text-start">
        <p className="py-5 font-serif text-4xl capitalize">Learning area </p>
        <p className="text-lg"> {data.learning} </p>
      </div>
    </>
  );
};

export default ProjectDetail;
