const mongoose = require("mongoose");
const url = "https://i.stack.imgur.com/34AD2.jpg";
const MemberSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    position: { type: String },
    shortDescription: { type: String },
    image: { type: String, default: url },
    whatsAppNumber: { type: String },
    facebookId: { type: String },
    instagramId: { type: String },
    linkedinId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
