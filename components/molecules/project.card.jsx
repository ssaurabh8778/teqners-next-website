import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, backgroundImg, projectUrl, type }) => {
    return (
        <div className="relative shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)]  group">
            {type === "video" ? (
                <video autoPlay loop>
                    <source src={backgroundImg} />
                </video>
            ) : (
                <Image
                    src={backgroundImg}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    className=""
                    objectFit="cover"
                />
            )}

            <div className="opacity-0  flex items-center justify-center z-[1] absolute top-0 left-0 p-4 w-full h-full transition-opacity duration-200 group-hover:opacity-100 group-hover:bg-gradient-to-r from-[#5651e5aa] to-[#709dffaa]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                    {title}
                </h3>
                {/*         <p className="pb-4 pt-2 text-white text-center">React JS</p> */}
                {/*         <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link> */}
            </div>
        </div>
    );
};

export default ProjectCard;
