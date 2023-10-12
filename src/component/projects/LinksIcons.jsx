import React from "react";
const LinksIcons = ({ linkProject }) => {
  return (
    <>
      {linkProject.map((items) => {
        return (
          <div className=" flex items-center  justify-center   " key={items.id}>
            <div>
              <a href={items.url} className=" flex max-w-sm items-center">
                <img
                  src={items.website}
                  alt={items.altText_1}
                  className=" cursor-pointer rounded-full "
                />
              </a>
            </div>

            <div>
              <a
                href={items.github}
                className="flex max-w-sm  items-center rounded-full"
              >
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

