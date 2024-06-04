import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const all_reports = await Report.find({});
    return NextResponse.json({
      success: true,
      data: all_reports,
    });
  } catch (error) {
    console.log("error from fetching a report", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
