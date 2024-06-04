"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../Images/UMR.svg";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose, IoIosMenu } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-gray-200 bg-white shadow-md"
      ref={navbarRef}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
        <Link href={"/"}>
          <Image src={logo} width={200} height={300} className="h-11" />
        </Link>
        <button
          id="navbar-toggle"
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <IoIosClose className="size-12" />
          ) : (
            <IoIosMenu className="size-12" />
          )}
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <Link href={"/"}>
              <span
                className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-400"
                aria-current="page"
              >
                Home
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-400">
                About
              </span>
            </Link>
            <Link href={"/services"}>
              <span className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-400">
                Services
              </span>
            </Link>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-400"
              >
                Industry Verticals{" "}
                {isDropdownOpen ? (
                  <IoIosArrowUp className="ml-3" />
                ) : (
                  <IoIosArrowDown className="ml-3" />
                )}
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${isDropdownOpen ? "" : "hidden"} -m-4 mt-1 w-full divide-y divide-gray-100 rounded-lg bg-white px-3 font-normal md:right-40 md:m-0 md:mt-6 md:w-64 md:px-0 md:shadow`}
              >
                <ul
                  className="pb-3 text-sm text-gray-700 md:py-2"
                  aria-labelledby="dropdownLargeButton"
                >
                  <Link href={"/industry-verticals/Health-care"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Healthcare
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Chemical-and-Material"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Chemicals & Materials
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Information-Technology"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Information & Technology
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Machinery-Equipment"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Machinery & Equipment
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Energy-and-Power"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Energy & Power
                    </span>
                  </Link>
                  <Link
                    href={"/industry-verticals/Semiconductor-and-Electronic"}
                  >
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Semiconductor & Electronics
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Covid-19-Analysis"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Covid-19 Analysis
                    </span>
                  </Link>
                  <Link
                    href={"/industry-verticals/Automotive-and-Transportation"}
                  >
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Automotive & Transportation
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Food-and-Beverages"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Food & Beverages
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Agriculture"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Agriculture
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Consumer-and-Goods"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Consumer Goods
                    </span>
                  </Link>
                  <Link href={"/industry-verticals/Packaging"}>
                    <span className="block px-4 py-2 md:hover:text-blue-400">
                      Packaging
                    </span>
                  </Link>
                </ul>
              </div>
            </li>
            <Link href={"/contact"}>
              <span className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-400">
                Contact
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
