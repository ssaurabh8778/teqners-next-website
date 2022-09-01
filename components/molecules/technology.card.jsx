import React from "react";
import Image from "next/image";
import propertyImg from "../../public/assets/projects/property.jpg";
import Link from "next/link";

const TechnologyCard = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div className="relative shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] rounded-md group">
            <Image
                src={backgroundImg}
                width="100%"
                height="100%"
                layout="responsive"
                className="rounded-md"
                objectFit="cover"
            />
            <div className="opacity-0 rounded-md flex items-center justify-center z-[1] absolute top-0 left-0 p-4 w-full h-full transition-opacity duration-200 group-hover:opacity-100 group-hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default TechnologyCard;
