import Image from "next/image";
import React from "react";
import heroImage from "../../Images/hero-image-01.png";
import { IoIosArrowDropright } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 py-10 md:mt-20 md:py-16">
      <div className="items-center lg:flex">
        <div className="lg:w-2/2 w-full">
          <div className="lg:max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-800 lg:text-6xl">
              Empowering businesses through insightful
              <span className="ml-2 text-[#60a5fa] md:whitespace-nowrap">
                market research
              </span>
            </h1>
            <p className="mt-3 text-gray-600">
              Universal Market Research provides data-driven insights,
              comprehensive studies, and customized research solutions across
              various industries.
            </p>
            <button className="mt-3 flex items-center gap-3 w-full rounded-md bg-[#60a5fa] px-4 py-2 text-white md:w-auto">
              Contact us <IoIosArrowDropright />
            </button>
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            className="md:w-[500px]"
            src={heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
