import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import solarhub24Img from "../public/assets/projects/solarhub24.png";
import covid19trackerImg from "../public/assets/projects/covid19tracker.png";
import tkphappImg from "../public/assets/projects/tkphapp.gif";
import the233engineersImg from "../public/assets/projects/233Engineers.png";
import infinitecanvasappImg from "../public/assets/projects/infinitecanvasapp.gif";
import performatrixImg from "../public/assets/projects/performatrix.png";
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
            title="Solarhub24"
            backgroundImg={solarhub24Img}
            projectUrl="/netflix"
          />
          <ProjectCard
            title="Performatrix"
            backgroundImg={performatrixImg}
            projectUrl="/twitch"
          />
          <ProjectCard
            title="233Engineers"
            backgroundImg={the233engineersImg}
            projectUrl="/twitch"
          />
          <ProjectCard
            title="TKPH App"
            backgroundImg={tkphappImg}
            projectUrl="/crypto"
          />
          <ProjectCard
            title="Infinite Canvas App"
            backgroundImg={infinitecanvasappImg}
            projectUrl="/property"
          />
          <ProjectCard
            title="Covid19 Tracker"
            backgroundImg={covid19trackerImg}
            projectUrl="/twitch"
          />
        </div>
        s
      </div>
    </div>
  );
};

export default Projects;
