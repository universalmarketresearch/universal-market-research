import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectDB();

    const extractData = await req.json();
    
    const {
      _id,
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
    } = extractData;

    const updatedProduct = await Report.findOneAndUpdate(
      {
        _id: _id,
      },
      {
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
      },
      { new: true }
    );

    if (updatedProduct) {
      return NextResponse.json({
        success: true,
        message: "Report updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the Report ! Please try again later",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
