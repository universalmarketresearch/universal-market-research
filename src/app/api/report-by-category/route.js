import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    if (!category) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "Report category not found",
      });
    }

    const getData = await Report.find({ category: category });

    if (getData && getData.length > 0) {
      return NextResponse.json({
        success: true,
        data: getData,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Report not found for this category",
      });
    }
  } catch (error) {
    console.log("Error from fetching a report for this category", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
