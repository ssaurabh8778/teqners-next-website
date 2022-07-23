import React from "react";
import Image from "next/image";
import automobileImg from "../public/assets/industries/automobile.avif";
import logisticsImg from "../public/assets/industries/logistics.avif";
import biotechImg from "../public/assets/industries/biotech.avif";
import healthcareImg from "../public/assets/industries/healthcare.avif";
import hospitalityImg from "../public/assets/industries/hospitality.avif";
import educationImg from "../public/assets/industries/education.avif";
import retailImg from "../public/assets/industries/retail.avif";
import bankingImg from "../public/assets/industries/banking.avif";
import aerospaceImg from "../public/assets/industries/aerospace.avif";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import IndustryCard from "./molecules/industry.card";

const Industries = () => {
  const industries = [
    "automobile",
    "transportation",
    "biotech",
    "healthcare",
    "hospitality",
    "education",
    "retail",
    "banking",
  ];
  return (
    <div id="industries" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Industries
        </p>
        <h2 className="py-4 uppercase text-gray-700 text-2xl">
          Industries we serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <IndustryCard
            title="Automotive"
            backgroundImg={automobileImg}
            projectUrl="/property"
          />
          <IndustryCard
            title="Logistics"
            backgroundImg={hospitalityImg}
            projectUrl="/crypto"
          />
          <IndustryCard
            title="Biotech"
            backgroundImg={biotechImg}
            projectUrl="/netflix"
          />
          <IndustryCard
            title="Healthcare"
            backgroundImg={healthcareImg}
            projectUrl="/twitch"
          />
          <IndustryCard
            title="Hospitality"
            backgroundImg={hospitalityImg}
            projectUrl="/property"
          />
          <IndustryCard
            title="Education"
            backgroundImg={educationImg}
            projectUrl="/crypto"
          />
          <IndustryCard
            title="Retail"
            backgroundImg={retailImg}
            projectUrl="/netflix"
          />
          <IndustryCard
            title="Banking"
            backgroundImg={bankingImg}
            projectUrl="/twitch"
          />
          <IndustryCard
            title="Aerospace"
            backgroundImg={aerospaceImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
