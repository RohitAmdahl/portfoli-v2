import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import projectData from "../../helpers/projects";
const ProjectDetail = () => {
  const { id } = useParams();
  const data = projectData[id];
  console.log(data);

  return (
    <>
      <Link to="/projects">
        <div className=" ml-10 flex h-14 w-14 cursor-pointer items-start justify-start rounded-full bg-white p-4 shadow-lg shadow-black">
          <RiArrowGoBackLine size={30} />
        </div>
      </Link>
      <div className="container mx-auto max-w-4xl pt-8 text-center font-serif text-3xl">
        <h1>{data.title}</h1>
        <div>
          <img src={data.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
