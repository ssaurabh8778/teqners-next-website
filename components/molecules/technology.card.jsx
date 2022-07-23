import React from "react";
import Image from "next/image";
import propertyImg from "../../public/assets/projects/property.jpg";
import Link from "next/link";

const TechnologyCard = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl object-fill group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] traslate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TechnologyCard;
