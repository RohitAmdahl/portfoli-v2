import React from "react";

const TagsIcons = ({ tags }) => {
  return (
    <div className="grid-col-4 grid max-w-lg items-center  px-1 py-1 lg:px-3 lg:py-3">
      <div className="flex max-w-xs items-center gap-6 px-5 py-1">
        {tags.map((items) => {
          return (
            <div
              className="max-w-mdSmall rounded-full bg-white p-2 shadow-inner  shadow-neutral-300 "
              key={items.id}
            >
              <img
                src={items.icon}
                alt="icon logo"
                className=" cursor-not-allowed "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagsIcons;
