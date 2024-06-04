import mongoose from "mongoose";
const TopKeyPlayersSchema = new mongoose.Schema({
  heading: String,
});

const MarketReportHighlightSchema = new mongoose.Schema({
  heading: String,
  highlightData: String,
});

const KeyIndustryDevelopmentSchema = new mongoose.Schema({
  year: String,
  data: String,
});

const MarketSegmentationSchema = new mongoose.Schema({
  heading: String,
  content: [String],
});

const BasedOnRegionSchema = new mongoose.Schema({
  heading: String,
  content: [String],
});

const ReportSchema = new mongoose.Schema({
  reportID: {
    type: String,
    unique: true,
    required: true,
  },
  category: String,
  reportTitle: String,
  reportBio: String,
  marketOverview: String,
  TopKeyPlayers: [TopKeyPlayersSchema],
  MarketDynamicFactors: String,
  MarketReportHighlight: [MarketReportHighlightSchema],
  KeyIndustryDevelopment: [KeyIndustryDevelopmentSchema],
  MarketSegmentation: [MarketSegmentationSchema],
  BasedOnRegion: [BasedOnRegionSchema],
  publishDate: String,
  baseYear: String,
  noOfPages: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.models.Report || mongoose.model("Report", ReportSchema);
export default Report;
