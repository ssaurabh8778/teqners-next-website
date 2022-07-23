import React from "react";
import Image from "next/image";
import webdevelopmentImg from "../public/assets/technologies/webdevelopment.jpg";
import mobileappdevelopmentImg from "../public/assets/technologies/mobileappdevelopment.avif";
import blockchainImg from "../public/assets/technologies/blockchain.avif";
import aimlImg from "../public/assets/technologies/aiml.jpg";
import virtualrealitylImg from "../public/assets/technologies/virtual.jpg";
import cloudservicesImg from "../public/assets/technologies/cloudservices.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import TechnologyCard from "./molecules/technology.card";
import MovingTech from "./molecules/movingTech";

const Technologies = () => {
  return (
    <div id="technologies" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Technologies
        </p>
        <h2 className="py-4 uppercase text-gray-700 text-2xl">
          Our Play-Ground
        </h2>
        <MovingTech />
        <div className="grid md:grid-cols-3 gap-8">
          <TechnologyCard
            title="Web Development"
            backgroundImg={webdevelopmentImg}
            projectUrl="/property"
          />
          <TechnologyCard
            title="Mobile App Development"
            backgroundImg={mobileappdevelopmentImg}
            projectUrl="/crypto"
          />
          <TechnologyCard
            title="Blockchain Development"
            backgroundImg={blockchainImg}
            projectUrl="/Blockchain Development"
          />
          <TechnologyCard
            title="Artificial Intelligence & Machine Learning"
            backgroundImg={aimlImg}
            projectUrl="/twitch"
          />
          <TechnologyCard
            title="Virtual Reality"
            backgroundImg={virtualrealitylImg}
            projectUrl="/twitch"
          />
          <TechnologyCard
            title="Artificial Intelligence & Machine Learning"
            backgroundImg={cloudservicesImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
