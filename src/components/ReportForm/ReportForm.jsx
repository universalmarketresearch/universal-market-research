"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";

const ReportForm = ({ onSubmit, isLoading, selectedReportToUpdate }) => {
  const { isLoggedIn, userInfo } = useContext(GlobalContext);
  const postedBy = userInfo?._id;
  const [category, setCategory] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.category : "",
  );
  const [reportTitle, setReportTitle] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.reportTitle : "",
  );
  const [reportBio, setReportBio] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.reportBio : "",
  );
  const [marketOverview, setMarketOverview] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.marketOverview : "",
  );
  const [topKeyPlayers, setTopKeyPlayers] = useState(
    selectedReportToUpdate
      ? selectedReportToUpdate.TopKeyPlayers
      : [{ heading: "" }],
  );
  const [marketDynamicFactors, setMarketDynamicFactors] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.MarketDynamicFactors : "",
  );
  const [marketReportHighlight, setMarketReportHighlight] = useState(
    selectedReportToUpdate
      ? selectedReportToUpdate.MarketReportHighlight
      : [{ heading: "", highlightData: "" }],
  );
  const [keyIndustryDevelopment, setKeyIndustryDevelopment] = useState(
    selectedReportToUpdate
      ? selectedReportToUpdate.KeyIndustryDevelopment
      : [{ year: "", data: "" }],
  );
  const [marketSegmentation, setMarketSegmentation] = useState(
    selectedReportToUpdate
      ? selectedReportToUpdate.MarketSegmentation
      : [{ heading: "", content: [""] }],
  );
  const [basedOnRegion, setBasedOnRegion] = useState(
    selectedReportToUpdate
      ? selectedReportToUpdate.BasedOnRegion
      : [{ heading: "", content: [""] }],
  );
  const [publishDate, setPublishDate] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.publishDate : "",
  );
  const [baseYear, setBaseYear] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.baseYear : "",
  );
  const [noOfPages, setNoOfPages] = useState(
    selectedReportToUpdate ? selectedReportToUpdate.noOfPages : "",
  );
  
  const router = useRouter();

  const pathname = usePathname();
  const isUpdatePage = pathname.includes("update-report")
  const isValidForm = () => {
    return marketOverview &&
      marketOverview.trim() !== "" &&
      publishDate &&
      publishDate.trim() !== "" &&
      noOfPages &&
      noOfPages.trim() !== ""
      ? true
      : false;
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [isLoggedIn, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "category":
        setCategory(value);
        break;
      case "reportTitle":
        setReportTitle(value);
        break;
      case "reportBio":
        setReportBio(value);
        break;
      case "marketOverview":
        setMarketOverview(value);
        break;
      case "marketDynamicFactors":
        setMarketDynamicFactors(value);
        break;
      case "publishDate":
        setPublishDate(value);
        break;
      case "baseYear":
        setBaseYear(value);
        break;
      case "noOfPages":
        setNoOfPages(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      category,
      reportTitle,
      reportBio,
      marketOverview,
      topKeyPlayers,
      marketDynamicFactors,
      marketReportHighlight,
      keyIndustryDevelopment,
      marketSegmentation,
      basedOnRegion,
      publishDate,
      baseYear,
      noOfPages,
      postedBy,
    };
    onSubmit(formData);
    console.log("Form Data: ", formData);
  };


  const addTopKeyPlayer = () => {
    setTopKeyPlayers((prevPlayers) => [...prevPlayers, { heading: "" }]);
  };

  const addMarketReportHighlight = () => {
    setMarketReportHighlight((prevHighlights) => [
      ...prevHighlights,
      { heading: "", highlightData: "" },
    ]);
  };

  const addKeyIndustryDevelopment = () => {
    setKeyIndustryDevelopment((prevDevelopments) => [
      ...prevDevelopments,
      { year: "", data: "" },
    ]);
  };

  const addSegment = () => {
    setMarketSegmentation((prevSegments) => [
      ...prevSegments,
      { heading: "", content: [""] },
    ]);
  };

  const addSegmentContent = (segmentIndex) => {
    setMarketSegmentation((prevSegments) => {
      const updatedSegments = [...prevSegments];
      updatedSegments[segmentIndex].content.push("");
      return updatedSegments;
    });
  };

  const addBasedOnRegion = () => {
    setBasedOnRegion((prevRegions) => [
      ...prevRegions,
      { heading: "", content: [""] },
    ]);
  };

  const addBasedOnRegionContent = (regionIndex) => {
    setBasedOnRegion((prevRegions) => {
      const updatedRegions = [...prevRegions];
      updatedRegions[regionIndex].content.push("");
      return updatedRegions;
    });
  };

  const handleTopKeyPlayersChange = (e, index) => {
    const { value } = e.target;
    setTopKeyPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index].heading = value;
      return updatedPlayers;
    });
  };

  const handleMarketReportHighlightChange = (e, index, field) => {
    const { value } = e.target;
    setMarketReportHighlight((prevHighlights) => {
      const updatedHighlights = [...prevHighlights];
      updatedHighlights[index][field] = value;
      return updatedHighlights;
    });
  };

  const handleKeyIndustryDevelopmentChange = (e, index, field) => {
    const { value } = e.target;
    setKeyIndustryDevelopment((prevDevelopments) => {
      const updatedDevelopments = [...prevDevelopments];
      updatedDevelopments[index][field] = value;
      return updatedDevelopments;
    });
  };

  const handleMarketSegmentation = (e, index, field, contentIndex) => {
    const { value } = e.target;
    setMarketSegmentation((prevSegments) => {
      const updatedSegments = [...prevSegments];
      if (field === "heading") {
        updatedSegments[index].heading = value;
      } else if (field === "content") {
        updatedSegments[index].content[contentIndex] = value;
      }
      return updatedSegments;
    });
  };

  const handleBasedOnRegion = (e, index, field, contentIndex) => {
    const { value } = e.target;
    setBasedOnRegion((prevRegions) => {
      const updatedRegions = [...prevRegions];
      if (field === "heading") {
        updatedRegions[index].heading = value;
      } else if (field === "content") {
        updatedRegions[index].content[contentIndex] = value;
      }
      return updatedRegions;
    });
  };

  return (
    <div className="mx-auto mt-20 max-w-7xl p-4 md:mt-20">
      <h1 className="mb-4 text-center text-2xl font-bold">
       {isUpdatePage ? ("Update The Report") : ("Add New Report")}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="Health-care">Healthcare</option>
            <option value="Chemical-and-Material">Chemicals & Materials</option>
            <option value="Information-Technology">
              Information & Technology
            </option>
            <option value="Machinery-Equipment">Machinery & Equipment</option>
            <option value="Energy-and-Power">Energy & Power</option>
            <option value="Semiconductor-and-Electronic">
              Semiconductor & Electronics
            </option>
            <option value="Covid-19-Analysis">Covid-19 Analysis</option>
            <option value="Automotive-and-Transportation">
              Automotive & Transportation
            </option>
            <option value="Food-and-Beverages">Food & Beverages</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Consumer-and-Goods">Consumer Goods</option>
            <option value="Packaging">Packaging</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="reportTitle" className="mb-2 block">
            Report Title
          </label>
          <input
            type="text"
            id="reportTitle"
            name="reportTitle"
            value={reportTitle}
            onChange={handleChange}
            placeholder="Enter Report Title"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reportBio" className="mb-2 block">
            Report Bio
          </label>
          <textarea
            id="reportBio"
            name="reportBio"
            placeholder="Enter Report Short Information"
            value={reportBio}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="marketOverview" className="mb-2 block">
            Market Overview
          </label>
          <textarea
            id="marketOverview"
            placeholder="Enter Overview Of Market"
            name="marketOverview"
            value={marketOverview}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="topKeyPlayers" className="mb-2 block">
            Top Key Players
          </label>
          {topKeyPlayers?.map((player, index) => (
            <input
              key={index}
              type="text"
              placeholder="Enter Player Information"
              value={player.heading}
              onChange={(e) => handleTopKeyPlayersChange(e, index)}
              className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          ))}
          <button
            type="button"
            onClick={addTopKeyPlayer}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add New Player
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="marketDynamicFactors" className="mb-2 block">
            Market Dynamic Factors
          </label>
          <textarea
            id="marketDynamicFactors"
            name="marketDynamicFactors"
            placeholder="Enter Information Of Market Dynamic Factors"
            value={marketDynamicFactors}
            onChange={(e) => setMarketDynamicFactors(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="marketReportHighlight" className="mb-2 block">
            Market Report Highlight
          </label>
          {marketReportHighlight?.map((highlight, index) => (
            <div key={index}>
              <input
                type="text"
                value={highlight.heading}
                placeholder="Enter Heading"
                onChange={(e) =>
                  handleMarketReportHighlightChange(e, index, "heading")
                }
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <textarea
                value={highlight.highlightData}
                placeholder="Enter Highlight Data"
                onChange={(e) =>
                  handleMarketReportHighlightChange(e, index, "highlightData")
                }
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addMarketReportHighlight}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add New Highlight
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="keyIndustryDevelopment" className="mb-2 block">
            Key Industry Development
          </label>
          {keyIndustryDevelopment?.map((development, index) => (
            <div key={index}>
              <input
                type="text"
                value={development.year}
                placeholder="Enter Year eg: MM | YYYY"
                onChange={(e) =>
                  handleKeyIndustryDevelopmentChange(e, index, "year")
                }
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <textarea
                value={development.data}
                placeholder="Enter Key Industry Development Data"
                onChange={(e) =>
                  handleKeyIndustryDevelopmentChange(e, index, "data")
                }
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addKeyIndustryDevelopment}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add New Development
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="marketSegmentation" className="mb-2 block">
            Market Segmentation
          </label>
          {marketSegmentation?.map((segmentation, index) => (
            <div key={index}>
              <input
                type="text"
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                value={segmentation.heading}
                onChange={(e) => handleMarketSegmentation(e, index, "heading")}
                placeholder="Enter Market Segment Heading"
              />
              {segmentation.content.map((content, contentIndex) => (
                <div key={contentIndex}>
                  <textarea
                    className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                    value={content}
                    onChange={(e) =>
                      handleMarketSegmentation(
                        e,
                        index,
                        "content",
                        contentIndex,
                      )
                    }
                    placeholder="Enter Market Segment Content"
                  />
                </div>
              ))}
              <button
                type="button"
                className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => addSegmentContent(index)}
              >
                Add New Content
              </button>
            </div>
          ))}
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={addSegment}
          >
            Add New Segment
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="BasedOnRegion" className="mb-2 block">
            Market based on region
          </label>
          {basedOnRegion?.map((region, index) => (
            <div key={index}>
              <input
                type="text"
                className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                value={region.heading}
                onChange={(e) => handleBasedOnRegion(e, index, "heading")}
                placeholder="Enter Region"
              />
              {region.content.map((content, contentIndex) => (
                <div key={contentIndex}>
                  <textarea
                    className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                    value={content}
                    onChange={(e) =>
                      handleBasedOnRegion(e, index, "content", contentIndex)
                    }
                    placeholder="Enter Country"
                  />
                </div>
              ))}
              <button
                type="button"
                className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => addBasedOnRegionContent(index)}
              >
                Add New Content
              </button>
            </div>
          ))}
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={addBasedOnRegion}
          >
            Add New Region
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="publishDate" className="mb-2 block">
            Publish Date
          </label>
          <input
            type="text"
            id="publishDate"
            name="publishDate"
            placeholder="Enter Date eg: MM | YYYY"
            value={publishDate}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="baseYear" className="mb-2 block">
            Base Year
          </label>
          <input
            type="text"
            id="baseYear"
            name="baseYear"
            placeholder="Enter Base Year | eg:YYYY"
            value={baseYear}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="noOfPages" className="mb-2 block">
            Number of Pages
          </label>
          <input
            type="text"
            id="noOfPages"
            name="noOfPages"
            placeholder="Enter Number Of Pages"
            value={noOfPages}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        {isUpdatePage ? (
          <button
          type="submit"
          className={`w-full rounded bg-[#60a5fa] px-6 py-1.5 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          ) : (
            "Save Changes"
          )}
        </button>
        ) : (
          <button
          type="submit"
          disabled={!isValidForm() || isLoading}
          className={`w-full rounded bg-[#60a5fa] px-6 py-1.5 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-50 ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
        )}
        
      </form>
    </div>
  );
};

export default ReportForm;
