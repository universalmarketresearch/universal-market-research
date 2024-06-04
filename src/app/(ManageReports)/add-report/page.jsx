"use client";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ReportForm from "@/components/ReportForm/ReportForm";

const AddReport = () => {
  const { isLoggedIn} = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [isLoggedIn, router]);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/add-report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        router.push("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed creating report");
      console.error("Error creating report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReportForm onSubmit={handleFormSubmit} isLoading={isLoading} />
  );
};

export default AddReport;
