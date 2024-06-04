"use client";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ReportForm from "@/components/ReportForm/ReportForm";

const UpdateReport = () => {
  const { isLoggedIn , selectedReportToUpdate } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      formData._id = selectedReportToUpdate._id;
      const response = await fetch('/api/update-report', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        router.push('/')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Opps! details not saved backend error try later");
    } finally{
      setIsLoading(false)
    }
  };

  return <ReportForm selectedReportToUpdate={selectedReportToUpdate} onSubmit={handleSubmit} isLoading={isLoading} />;
};

export default UpdateReport;
