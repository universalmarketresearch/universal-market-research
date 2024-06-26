"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import noresult from "../../../Images/no-results.png";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";

const FRONTEND_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

const Page = () => {
  const [reportData, setReportData] = useState(null);
  const { isLoggedIn, setSelectedReportToUpdate } = useContext(GlobalContext);
  const params = useParams();
  const id = params?.slug?.[1];
  const [loading, setLoading] = useState(true);
  const [isDeletingReport, setIsDeletingReport] = useState(false);
  const [messageSending, setMessageSending] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productById = useCallback(async () => {
    try {
      const response = await fetch(
        `${FRONTEND_BASE_URL}api/report-by-id?id=${id}`,
        {
          method: 'GET',
          cache: 'no-store',
        }
      );
      const data = await response.json();
      if (data && typeof data === 'object') {
        setReportData(data.data);
      } else {
        console.error('Received data is not an object:', data);
        setReportData(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    productById();
  }, [productById]);

  useEffect(() => {
    if (reportData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        reportName: reportData.reportTitle,
      }));
    }
  }, [reportData]);

  const deleteReport = async () => {
    try {
      setIsDeletingReport(true);
      const res = await fetch(`/api/delete-report?id=${reportData._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setIsDeletingReport(false);
        router.push('/');
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsDeletingReport(false);
    }
  };

  const handleUpdateClick = () => {
    setSelectedReportToUpdate(reportData);
    router.push(`/update-report`);
  };

  const [formData, setFormData] = useState({
    reportName: "",
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSending(true)
    console.log(formData);
    setFormData({
      reportName: "",
      name: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    })
    setModalOpen(false);
    setMessageSending(false)
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const isValidForm = () => {
    return (
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.companyName &&
      formData.companyName.trim() !== "" &&
      formData.phone &&
      formData.phone.trim() !== "" &&
      formData.message &&
      formData.message.trim() !== ""
    );
  };
  


  return (
    <div className="mx-auto mt-10 max-w-7xl px-5 pb-10 md:mt-20">
      {loading ? (
        <div className="mt-20 md:my-4">
          <Skeleton height={100} />
          <Skeleton height={30} count={3} />
          <Skeleton height={100} />
          <Skeleton height={30} count={3} />
        </div>
      ) : (
        <div>
          {reportData ? (
            <div key={reportData?._id}>
              <div className="mt-20 max-h-fit max-w-7xl pb-4 md:mt-24 md:flex md:space-x-4 md:border-b-2">
                <div className="max-w-4xl pr-3 md:w-full md:border-r-2">
                  <p className="bg-opacity-60 text-2xl font-semibold md:text-3xl">
                    {reportData?.reportTitle}
                  </p>
                  <p className="py-3 text-justify">{reportData?.reportBio}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 border-t-2 pt-2 md:flex-col md:items-start md:justify-normal md:gap-0 md:space-y-2 md:border-t-0 md:pt-0">
                  <p>
                    <span className="font-medium">Report Id : </span>
                    {reportData?.reportID}
                  </p>
                  <p>
                    <span className="font-medium">Publish On : </span>
                    {reportData?.publishDate}
                  </p>
                  <p>
                    <span className="font-medium">Base Year : </span>{" "}
                    {reportData?.baseYear}
                  </p>
                  <p>
                    <span className="font-medium">No Of Pages : </span>
                    {reportData?.noOfPages}
                  </p>
                  {isLoggedIn && (
                    <>
                      <button
                        type="submit"
                        onClick={deleteReport}
                        disabled={isDeletingReport}
                        className={`w-full rounded bg-red-400 px-6 py-1.5 font-medium leading-normal text-white shadow transition duration-150 ease-in-out  disabled:opacity-50 ${
                          isDeletingReport ? "cursor-not-allowed" : ""
                        }`}
                      >
                        {isDeletingReport ? (
                          <div className="flex items-center justify-center">
                            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
                          </div>
                        ) : (
                          "Delete report"
                        )}
                      </button>
                      <button
                        type="submit"
                        onClick={handleUpdateClick}
                        className="w-full rounded bg-green-400 px-6 py-1.5 font-medium leading-normal text-white shadow"
                      >
                        Update report
                      </button>
                    </>
                  )}
                  <button
                    onClick={openModal}
                    className="w-full rounded bg-yellow-400 px-6 py-1.5 font-medium leading-normal text-white shadow"
                  >
                    Request Sample PDF
                  </button>
                  <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <div className="md:w-[500px] w-[260px] ">
                      <div className="md:py-2">
                        <div className="px-2 md:px-4">
                          <p className="mt-4 text-lg capitalize text-center">
                            Request Sample PDF for {reportData?.reportTitle}
                          </p>
                          <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-4"
                          >
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                              <div className="grid w-full items-center gap-1.5">
                                <label
                                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="fullname"
                                >
                                  Full Name
                                </label>
                                <input
                                  className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  placeholder="Full Name"
                                />
                              </div>
                              <div className="grid w-full  items-center gap-1.5">
                                <label
                                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="companyName"
                                >
                                  Company Name
                                </label>
                                <input
                                  className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                                  type="text"
                                  id="companyName"
                                  name="companyName"
                                  value={formData.companyName}
                                  onChange={handleChange}
                                  required
                                  placeholder="Company Name"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                              <div className="grid w-full  items-center gap-1.5">
                                <label
                                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="email"
                                >
                                  Company Email
                                </label>
                                <input
                                  className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  placeholder="Company Email"
                                />
                              </div>
                              <div className="grid w-full  items-center gap-1.5">
                                <label
                                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="phone_number"
                                >
                                  Phone number
                                </label>
                                <input
                                  className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                  placeholder="Phone number"
                                />
                              </div>
                            </div>
                            <div className="grid w-full  items-center gap-1.5">
                              <label
                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="message"
                              >
                                Message
                              </label>
                              <textarea
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                placeholder="Feel free to share your research requirements"
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={!isValidForm() || messageSending}
                              className={`w-full rounded bg-[#60a5fa] px-6 py-1.5 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-50 ${
                                messageSending ? "cursor-not-allowed" : ""
                              }`}
                            >
                              {messageSending ? (
                                <div className="flex items-center justify-center">
                                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
                                </div>
                              ) : (
                                "Send Message"
                              )}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="mt-3 px-2">
                <p className="pb-2 text-xl font-semibold">
                  Market Overview :-{" "}
                </p>
                <p className="whitespace-pre-wrap pb-2 text-justify">
                  {reportData?.marketOverview}
                </p>

                {/* Top Key Players Section */}
                <p className="pb-2 text-xl font-semibold">
                  Top Key Players Covered in{" "}
                  {reportData?.reportTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  Market:
                </p>
                <ul className="list-disc pb-2 pl-7 md:pl-10">
                  {reportData?.topKeyPlayers?.map((player) => (
                    <li key={player?._id}>{player?.heading}</li>
                  ))}
                </ul>

                {/* Market Dynamics and Factors */}
                <p className="pb-2 text-xl font-semibold">
                  Market Dynamics and Factors:
                </p>
                <p className="whitespace-pre-wrap pb-2 text-justify">
                  {reportData?.marketDynamicFactors}
                </p>

                {/* Market Report Highlight */}
                <p className="pb-2 text-xl font-semibold">
                  {reportData?.reportTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  Market Report Highlight:
                </p>
                {reportData?.marketReportHighlight?.map((highlight) => (
                  <p className="pb-2 text-justify" key={highlight?.heading}>
                    <span className="font-semibold">
                      By {highlight?.heading},{" "}
                    </span>{" "}
                    {highlight?.highlightData}
                  </p>
                ))}

                {/* Key Industry Development */}
                <p className="pb-2 text-xl font-semibold">
                  Key Industry Development:
                </p>
                {reportData?.keyIndustryDevelopment?.map((industrykey) => (
                  <p className="pb-2 text-justify" key={industrykey?.year}>
                    <span className="font-semibold">
                      In {industrykey?.year},{" "}
                    </span>
                    {industrykey?.data}
                  </p>
                ))}

                {/* Market Segmentation */}
                <p className="pb-2 text-xl font-semibold">
                  {reportData?.reportTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  Market Segmentation:
                </p>
                <div>
                  {reportData?.marketSegmentation?.map((segment) => (
                    <div key={segment?._id}>
                      <p className="pb-2 font-semibold">{segment?.heading}</p>
                      <ul className="list-disc pb-2 pl-7 md:pl-10">
                        {segment?.content?.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Market based on region */}
                <p className="pb-2 text-xl font-semibold">
                  {reportData?.reportTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  Market based on region:
                </p>
                <div>
                  {reportData?.basedOnRegion?.map((region) => (
                    <div key={region?._id}>
                      <p className="pb-2 font-semibold">{region?.heading}</p>
                      <ul className="list-disc pb-2 pl-7 md:pl-10">
                        {region?.content?.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <Image src={noresult} width={300} height={300} alt="no result" />
              <p className="text-2xl font-semibold">No report data</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;