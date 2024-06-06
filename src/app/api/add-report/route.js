import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function generateReportID() {
  // Generate a random number between 1000 and 9999 (inclusive)
  return Math.floor(1000 + Math.random() * 9000);
}

export async function POST(req) {
  try {
    await connectDB();
    const extractData = await req.json();
    
    // Generate a new report ID
    const reportID = generateReportID();
    
    // Add the reportID to the data before creating the report
    const newData = {
      ...extractData,
      reportID,
    };
    
    const newProduct = await Report.create(newData);

    if (newProduct) {
      return NextResponse.json({
        success: true,
        message: "Report added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add Report! Please try again",
      });
    }
  } catch (error) {
    console.log("Error from adding report", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
