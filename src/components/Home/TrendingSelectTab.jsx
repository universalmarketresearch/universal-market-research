"use client";
import React, { useState } from "react";

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

const TrendingSelectTab = () => {
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);

  const handleTabChange = (event) => {
    const selectedCategory = event.target.value;
    const tab = tabItems.find((item) => item.category === selectedCategory);
    setSelectedTab(tab);
  };

  return (
    <div className="mx-auto flex flex-col items-center px-4 py-12 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl">
        Trending Market Reports
      </h2>
      <div className="mx-auto flex flex-col items-center bg-white md:p-8">
        <div className="mb-10">
          <select
            value={selectedTab.category}
            onChange={handleTabChange}
            className="focus:shadow-outline-blue border border-gray-300 mt-4 rounded-md px-4 py-2 transition-all duration-300 focus:outline-none"
          >
            {tabItems.map((item, index) => (
              <option key={index} value={item.category}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {selectedTab && (
          <div className="flex flex-wrap gap-4 transition-all duration-300">
            <div className="w-80 rounded-lg border-l-4 border-[#60a5fa] bg-white p-4 shadow-md md:w-96">
              <h2 className="mb-2 text-2xl font-semibold text-[#60a5fa]">
                {selectedTab.name} Content
              </h2>
              <p className="text-gray-700">
                Content for {selectedTab.name} category
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingSelectTab;
