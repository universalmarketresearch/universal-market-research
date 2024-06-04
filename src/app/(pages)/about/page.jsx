import React from "react";
import img1 from '../../../Images/about-image-1.jpg'
import img2 from '../../../Images/about-image-2.jpg'
import img3 from '../../../Images/about-image-3.jpg'

import {
  AiOutlineSolution,
  AiOutlineBulb,
  AiOutlineDatabase,
  AiOutlineLineChart,
  AiOutlineRobot,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineGlobal,
  AiOutlineRise,
  AiOutlineRocket,
  AiOutlineStock,
  AiOutlineFlag,
} from "react-icons/ai";
import Image from "next/image";
import Client from "@/components/ClientDetails/Client";

const services = [
  {
    name: "Consulting Services",
    description:
      "Customized consulting solutions tailored to your specific business needs.",
    icon: AiOutlineSolution,
  },
  {
    name: "Tailored Insights",
    description:
      "Get insights tailored to your industry and business objectives.",
    icon: AiOutlineBulb,
  },
  {
    name: "Syndicated Market Research",
    description:
      "Access comprehensive research reports covering various industries and markets.",
    icon: AiOutlineDatabase,
  },
  {
    name: "Competitive Intelligence",
    description:
      "Gain strategic insights into your competitors' activities and market positioning.",
    icon: AiOutlineLineChart,
  },
  {
    name: "Emerging Technologies",
    description:
      "Stay ahead of the curve with insights into emerging technologies and trends.",
    icon: AiOutlineRobot,
  },
  {
    name: "Customer Research",
    description:
      "Understand your customers better through in-depth research and analysis.",
    icon: AiOutlineUser,
  },
  {
    name: "Market Intelligence",
    description:
      "Access actionable intelligence to make informed business decisions.",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Industry Development",
    description:
      "Gain insights into industry trends and developments shaping your market.",
    icon: AiOutlineGlobal,
  },
  {
    name: "Growth Strategy",
    description:
      "Develop strategic plans to drive growth and expansion for your business.",
    icon: AiOutlineRise,
  },
  {
    name: "Go To Market Strategy",
    description:
      "Create effective strategies to successfully launch and promote your products or services.",
    icon: AiOutlineRocket,
  },
  {
    name: "Market Assessment",
    description:
      "Assess market opportunities and risks to make informed investment decisions.",
    icon: AiOutlineStock,
  },
  {
    name: "Market Entry Strategy",
    description:
      "Plan your market entry strategy for new territories or industries.",
    icon: AiOutlineFlag,
  },
];

const About = () => {
  return (
    <section className="max-w-7xl px-3 md:mt-24 mt-20 mx-auto pt-10 pb-12 lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image src={img1} width={400} height={300} alt="about-img" className="w-full rounded-2xl" />
                </div>
                <div className="py-3 sm:py-4">
                  <Image src={img2} width={400} height={300} alt="about-img" className="w-full rounded-2xl" />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="my-4">
                  <Image src={img3} width={400} height={300} alt="about-img" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-5 text-3xl text-blue-400 font-bold text-dark sm:text-[40px]/[48px]">
                About Us
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Universal Market Research is a technocratic market research and
                consulting company dedicated to providing data-driven insights,
                comprehensive studies, and customized research solutions across
                various industries.
              </p>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Our mission is to empower businesses with actionable insights
                that drive strategic decision-making and foster growth and
                innovation.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                At Universal Market Research, we are committed to excellence,
                integrity, and client satisfaction. Our team of experts combines
                industry knowledge with analytical expertise to deliver
                unparalleled value to our clients.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Get in touch with us to learn more about how we can help your
                business succeed.
              </p>
            </div>
          </div>
        </div>
        <Client />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Elevate Your Business with Our Consulting Services
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Universal Market Research, we offer a wide range of
                consulting services designed to help businesses thrive in
                today's competitive landscape. Here are some of the services we
                provide:
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {services.map((item) => (
                <div key={item.name} className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-400 text-white flex-shrink-0">
                        {/* Render the icon */}
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                        {item.name}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
