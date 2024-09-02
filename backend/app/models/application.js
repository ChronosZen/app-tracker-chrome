import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  companyName: String,
  jobTitle: String,
  Status: String,
  Link: String,
});

export default mongoose.model("Application", applicationSchema);
