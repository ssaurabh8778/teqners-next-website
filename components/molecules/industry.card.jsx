import React from "react";
import Image from "next/image";
import propertyImg from "../../public/assets/projects/property.jpg";
import Link from "next/link";

const IndustryCard = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div className="relative shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] rounded-md">
            <Image
                src={backgroundImg}
                width="100%"
                height="100%"
                layout="responsive"
                className="rounded-md rounded-b-none"
                objectFit="cover"
            />

            <h3 className="text-2xl text-white bg-[#5651e5] rounded-b-md tracking-wider text-center p-3">
                {title}
            </h3>
        </div>
    );
};

export default IndustryCard;
