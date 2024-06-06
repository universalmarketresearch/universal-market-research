import mongoose from "mongoose";

const topKeyPlayersSchema = new mongoose.Schema({
  heading: String,
});

const marketReportHighlightSchema = new mongoose.Schema({
  heading: String,
  highlightData: String,
});

const keyIndustryDevelopmentSchema = new mongoose.Schema({
  year: String,
  data: String,
});

const marketSegmentationSchema = new mongoose.Schema({
  heading: String,
  content: [String],
});

const basedOnRegionSchema = new mongoose.Schema({
  heading: String,
  content: [String],
});

const reportSchema = new mongoose.Schema({
  reportID: {
    type: String,
    unique: true,
    required: true,
  },
  category: String,
  reportTitle: String,
  reportBio: String,
  marketOverview: String,
  topKeyPlayers: [topKeyPlayersSchema],
  marketDynamicFactors: String,
  marketReportHighlight: [marketReportHighlightSchema],
  keyIndustryDevelopment: [keyIndustryDevelopmentSchema],
  marketSegmentation: [marketSegmentationSchema],
  basedOnRegion: [basedOnRegionSchema],
  publishDate: String,
  baseYear: String,
  noOfPages: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);
export default Report;
