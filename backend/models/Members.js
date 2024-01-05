const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    position: { type: String },
    shortDescription: { type: String },
    image: { type: String },
    whatsAppNumber: { type: String },
    facebookId: { type: String },
    instagramId: { type: String },
    linkedinId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
