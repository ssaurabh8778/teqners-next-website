import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import solarhub24Img from "../public/assets/projects/solarhub24.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./molecules/project.card";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 uppercase text-gray-700 text-2xl">
          What I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Tyre Information Management System"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectCard
            title="TKPH App"
            backgroundImg={"assets/projects/videos/tkphapp.mp4"}
            projectUrl="/crypto"
            type="video"
          />
          <ProjectCard
            title="Solarhub24"
            backgroundImg={"assets/projects/videos/solarhub24.mp4"}
            projectUrl="/netflix"
            type="video"
          />
          <ProjectCard
            title="Covid19 Tracker"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
          <ProjectCard
            title="233Engineers"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
          <ProjectCard
            title="Coplae"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
