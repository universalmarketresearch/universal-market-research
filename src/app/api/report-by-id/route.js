import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "Report ID not found",
      });
    }

    const getData = await Report.find({ _id: id });

    if (getData && getData.length > 0) {
      return NextResponse.json({
        success: true,
        data: getData[0],
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Report not found",
      });
    }
  } catch (error) {
    console.log("Error from fetching a report", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
