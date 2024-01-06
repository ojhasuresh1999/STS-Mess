const mongoose = require("mongoose");

const url =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png";

const ExpenseSchema = new mongoose.Schema(
  {
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
    productName: { type: String },
    productPrice: { type: Number },
    productQuantity: { type: String },
    image: { type: String, default: url },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
