import connectDB from "@/database/dbConfig";
import Report from "@/models/Report.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if(!id) return NextResponse.json({success : false , message : "Report Id Required"});

    const deleted_report = await Report.findByIdAndDelete(id);

    if (deleted_report) {
      return NextResponse.json({
        success: true,
        message : "Report Deleted Successfully"
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete the Report try again",
      });
    }
  } catch (error) {
    console.log("error from deleting report", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
