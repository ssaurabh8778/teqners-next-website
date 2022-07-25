import React from "react";
import { FaTools } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const WhatWeDo = () => {
  const insideDivClass =
    "w-1/2 h-1/2 text-white border flex flex-col justify-center items-center hover:bg-[#000033] pt-3";
  const textClass = "p-4";
  const iconClass = "text-4xl";
  return (
    <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl bg-gray-100 flex items-center flex-wrap justify-center opacity-75">
      <div className={insideDivClass} style={{ backgroundColor: "#0000e6" }}>
        <FaTools className={iconClass} />
        <p className={textClass}>Product Engineering</p>
      </div>
      <div className={insideDivClass} style={{ backgroundColor: "#0000cc" }}>
        <BsGlobe className={iconClass} />
        <p className={textClass}>Enterprise Services</p>
      </div>
      <div className={insideDivClass} style={{ backgroundColor: "#0000b3" }}>
        <MdComputer className={iconClass} />
        <p className={textClass}>Digital Transformation Services</p>
      </div>
      <div className={insideDivClass} style={{ backgroundColor: "#000099" }}>
        <TbBrandGoogleAnalytics className={iconClass} />
        <p className={textClass}>Startup Software Solutions & Services</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
