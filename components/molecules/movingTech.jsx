import Image from "next/image";
import React from "react";

const MovingTech = () => {
  const imgHeight = "60";
  const imgWidth = "60";
  const imgClass = "mr-24";
  let techs = [
    "javascript",
    "java",
    "android",
    "docker",
    "git",
    "html",
    "laravel",
    "linux",
    "mysql",
    "node",
    "php",
  ];
  techs = [...techs, ...techs, ...techs];
  return (
    <div className="w-full overflow-hidden mb-4">
      <div className="animate1 flex p-4 w-full">
        {techs.map((tech, id) => (
          <div
            style={{
              marginRight: "30px",
              minWidth: "60px",
              minHeight: "60px",
            }}
            className="opacity-60"
            id={id}
            key={id}
          >
            <Image
              className={imgClass}
              src={`/assets/techLogos/${tech}.jpg`}
              alt="me"
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingTech;
