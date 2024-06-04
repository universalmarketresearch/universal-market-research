"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedReportToUpdate , setSelectedReportToUpdate] = useState(null)

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsLoggedIn(true);
      const userdata = JSON.parse(localStorage.getItem("user")) || {};
      setUserInfo(userdata);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userInfo,
        setUserInfo,
        selectedReportToUpdate , 
        setSelectedReportToUpdate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
