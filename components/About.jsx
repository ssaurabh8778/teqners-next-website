import Link from "next/link";
import React from "react";
import WhatWeDo from "./molecules/whatwedo.card";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <p className="py-4">Who We Are</p>
          <p className="py-2 text-gray-600">
            We, at Teqners, work and define our forte completely based on the
            client's requirements. Focussing our attention to specified
            technical requisites, we work in collaboration with you to shape the
            future and empower businesses with smart solutions. We strive to
            provide solutions aligned to your business goals and foster ideas to
            serve strategic challenges in rapidly growing marketplaces.
          </p>
          <p className="py-2 text-gray-600">
            We have built several products in a diverse range of domains from
            enterprise SaaS to consumer-based web applications.
          </p>
          <p className="py-2 text-gray-600">
            Our teams are honed by domain experts who help you make pragmatic
            decisions in selecting the right infrastructure and tools without
            losing sight of your product vision.
          </p>
          <Link href={"#projects"}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        {/*         <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-400">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
          />
        </div> */}
        <WhatWeDo />
      </div>
    </div>
  );
};

export default About;
