"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IndustryVerticalsPageData } from "@/database/IndustryVerticalsPageData";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const FRONTEND_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

const IndustryVerticals = () => {
  const [pageInfo, setpageInfo] = useState([]);
  const [reportOfCurrentCategory, setReportOfCurrentCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const { category } = useParams();

  const reportByCategory = useCallback(async () => {
    try {
      const response = await fetch(
        `${FRONTEND_BASE_URL}api/report-by-category?category=${category}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      const data = await response.json();
      setReportOfCurrentCategory(data?.data);
      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    reportByCategory();
  }, [reportByCategory]);

  useEffect(() => {
    const pageData = IndustryVerticalsPageData.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setpageInfo(pageData ? [pageData] : []);
    setLoading(false);
  }, [category]);

  return (
    <div className="mx-auto mt-20 max-w-7xl px-5 md:mt-24">
      {loading ? (
        <div className="my-10 md:my-4">
          <Skeleton height={300} />
          <Skeleton height={150} count={2} />
        </div>
      ) : (
        <>
          {pageInfo.map((e, index) => (
            <div className="mt-3 space-y-3" key={index}>
              <p className="text-3xl text-center font-bold text-blue-400">{e.pageTitle}</p>
              <p className="text-justify">{e.pageInfo}</p>
            </div>
          ))}
          <div className="mx-auto mt-4 max-w-7xl">
            <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg border bg-white">
              <input
                className="peer h-full w-full px-4 text-sm text-gray-700 outline-none"
                type="text"
                id="search"
                placeholder="Explore our diverse range of reports for valuable insights..."
              />
              <CiSearch className="h-6 w-6 mr-2 text-gray-700" />
            </div>
          </div>
          {dataLoading ? (
            <div className="my-10 md:my-6">
              <Skeleton height={100} count={3} />
            </div>
          ) : (
            <div className="mt-4">
              {reportOfCurrentCategory &&
                reportOfCurrentCategory.length > 0 && (
                  <p className="mb-2 text-lg font-semibold">
                    Reports available for this category:{" "}
                    {reportOfCurrentCategory.length}
                  </p>
                )}
              {reportOfCurrentCategory?.map((report, index) => (
                <Link
                  href={`/report/${report?.category}/${report?._id}`}
                  key={index}
                >
                  <div className="my-3 rounded-md border">
                    <div className="p-2 md:p-4">
                      <h1 className="truncate text-lg font-semibold">
                        {report?.reportTitle}
                      </h1>
                      <p className="mt-3 truncate text-sm text-gray-600">
                        {report?.reportBio}
                      </p>
                      <div className="flex items-center space-x-3 ">
                        {report?.publishDate && (
                          <p className="mt-3 text-sm text-gray-600">
                            Published Date: {report?.publishDate}
                          </p>
                        )}
                        {report?.baseYear && (
                          <p className="mt-3 text-sm text-gray-600">
                            Base Year: {report?.baseYear}
                          </p>
                        )}
                        {report?.noOfPages && (
                          <p className="mt-3 text-sm text-gray-600">
                            No Of Pages: {report?.noOfPages}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {reportOfCurrentCategory &&
                reportOfCurrentCategory.length > 0 && (
                  <div className="my-3 flex justify-center">
                    <button className="rounded-lg bg-blue-400 px-3 py-1.5 text-white">
                      Show More
                    </button>
                  </div>
                )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default IndustryVerticals;
