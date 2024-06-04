import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../Images/UMR.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto p-6">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <div className="flex w-full items-center justify-center md:-ml-3 md:items-start md:justify-start">
                <Link href={"/auth/sign-in"}>
                  <Image
                    src={logo}
                    width={200}
                    height={300}
                    alt="company logo"
                    className="h-12 "
                  />
                </Link>
              </div>
              <p className="mt-2 max-w-sm text-gray-500 dark:text-gray-400">
                Empowering Businesses with Data-Driven Insights. Discover More.
                Grow Faster with Universal Market Research.
              </p>
              <div className="mt-6 flex gap-2">
                <AiFillFacebook className="text-2xl text-blue-500" />
                <FcGoogle className="text-2xl" />
                <FaXTwitter className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="e uppercase text-gray-700">
                  Industry Verticals
                </h3>
                <Link href={"/industry-verticals/Health-care"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Healthcare
                  </span>
                </Link>
                <Link href={"/industry-verticals/Chemical-and-Material"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Chemicals & Materials
                  </span>
                </Link>
                <Link href={"/industry-verticals/Information-Technology"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Information & Technology
                  </span>
                </Link>
                <Link href={"/industry-verticals/Machinery-Equipment"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Machinery & Equipment
                  </span>
                </Link>
                <Link href={"/industry-verticals/Energy-and-Power"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Energy & Power
                  </span>
                </Link>
                <Link href={"/industry-verticals/Semiconductor-and-Electronic"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Semiconductor & Electronics
                  </span>
                </Link>
                <Link href={"/industry-verticals/Covid-19-Analysis"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Covid-19 Analysis
                  </span>
                </Link>
                <Link
                  href={"/industry-verticals/Automotive-and-Transportation"}
                >
                  <span className="mt-2 block text-sm text-gray-600">
                    Automotive & Transportation
                  </span>
                </Link>
                <Link href={"/industry-verticals/Food-and-Beverages"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Food & Beverages
                  </span>
                </Link>
                <Link href={"/industry-verticals/Agriculture"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Agriculture
                  </span>
                </Link>
                <Link href={"/industry-verticals/Consumer-and-Goods"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Consumer Goods
                  </span>
                </Link>
                <Link href={"/industry-verticals/Packaging"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Packaging
                  </span>
                </Link>
              </div>
              <div>
                <h3 className="uppercase text-gray-700">services</h3>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Consulting Services
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Tailored Insights
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Syndicated Market Research
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Competitive Intelligence
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Emerging Technologies
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Customer Research
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Market Intelligence
                </a>
                <a href="#" className="mt-2 block text-sm text-gray-600">
                  Industry Development
                </a>
              </div>
              <div>
                <h3 className="uppercase text-gray-700">Company</h3>
                <Link href={"/contact"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Contact
                  </span>
                </Link>
                <Link href={"/about"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    About
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Careers
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Privacy Policy
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Refund Policy
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="mt-2 block text-sm text-gray-600">
                    Terms & Conditions
                  </span>
                </Link>
              </div>
              <div>
                <h3 className="uppercase text-gray-700">Contact</h3>
                <span className="mt-2 block text-sm text-gray-600">
                  +1 526 654 8965
                </span>
                <span className="mt-2 block text-sm text-gray-600">
                  info@universalmarketresearch.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 h-px border-none bg-gray-200" />
        <div>
          <p className="text-center text-gray-500">
            © Universal Market Research 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
