import React from "react";
const LinksIcons = ({ linkProject }) => {
  return (
    <>
      {linkProject.map((items) => {
        return (
          <div
            className="flex  items-center justify-center rounded-full shadow-md shadow-black"
            key={items.id}
          >
            <div>
              <a
                href={items.url}
                className="flex max-w-sm  items-center rounded-full"
              >
                <img
                  src={items.website}
                  alt={items.altText_1}
                  className="  cursor-pointer rounded-full hover:bg-green "
                />
              </a>
            </div>

            <div>
              <a href={items.github}>
                <img
                  src={items.githubLinkIcon}
                  alt={items.altText}
                  className=" cursor-pointer rounded-full  hover:bg-pink "
                />
              </a>
            </div>
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
