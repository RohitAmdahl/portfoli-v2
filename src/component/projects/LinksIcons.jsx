import React from "react";
const LinksIcons = ({ link }) => {
  return (
    <>
      {link.map((items) => {
        return (
          <div
            className="flex items-center justify-center rounded-full shadow-md shadow-black"
            key={items.id}
          >
            <a href={items.url} className="flex items-center  ">
              <img src={items.netlifyIcon} alt="" />
            </a>
            <a href={items.github}>
              <img src={items.githubIcon} alt="" className="" />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default LinksIcons;
//   return (
//     <div className="grid grid-cols-3 items-center">
//       <div className="flex justify-center px-2 py-2 ">
//         <a href="">github</a>
//       </div>
//       <div className=" flex justify-center px-2 py-2 ">
//         <a href="">website</a>
//       </div>
//       <div className="   bg-red-200 "></div>
//     </div>
//   );
