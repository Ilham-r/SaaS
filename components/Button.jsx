import React from "react";

const Button = ({ title, colored = false }) => {
  return (
    <div
      className={`${
        colored ? "bg-white text-black" : "bg-black text-white  "
      } px-4 py-2 rounded-[10px] cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default Button;
