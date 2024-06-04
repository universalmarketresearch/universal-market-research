"use client";
import React, { useState } from 'react';

const tabItems = [
  { name: "Healthcare", category: "Health-care" },
  { name: "Chemicals & Materials", category: "Chemical-and-Material" },
  { name: "Information & Technology", category: "Information-Technology" },
  { name: "Machinery & Equipment", category: "Machinery-Equipment" },
  { name: "Energy & Power", category: "Energy-and-Power" },
  {
    name: "Semiconductor & Electronics",
    category: "Semiconductor-and-Electronic",
  },
];

const TrendingTab = () => {
  const [openTab, setOpenTab] = useState(0); // Changed initial state to 0

  return (
    <div className="mx-auto flex flex-col items-center px-4 py-12 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl">
        Trending Market Reports
      </h2>
      <div className="mx-auto flex max-w-7xl flex-col items-center bg-white p-8">
        <div className="mb-10 flex gap-3">
          {tabItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setOpenTab(index)} // Change to index
              className={`focus:shadow-outline-blue rounded-md px-4 py-2 transition-all duration-300 focus:outline-none ${
                openTab === index ? "bg-[#60a5fa] text-white" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {openTab !== null && (
          <div className="flex flex-wrap gap-4 transition-all duration-300">
            {/* Assuming you have content for each category */}
            <div className="w-96 rounded-lg border-l-4 border-[#60a5fa] bg-white p-4 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-[#60a5fa]">
                {tabItems[openTab].name} Content
              </h2>
              <p className="text-gray-700">
                Content for {tabItems[openTab].name} category
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingTab;
