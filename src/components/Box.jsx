import React from "react";

const Box = ({ children, className = "" }) => {
  return (
    <div
      className={`
        box-border
        bg-[url('/images/unguwvertical.png')]
        w-[90%]
        h-[130%]
        ${className}
        `}
    >
      <div className="w-full text-white text-justify space-y-4">
        {children}
      </div>
    </div>
  );
};

export default Box;
