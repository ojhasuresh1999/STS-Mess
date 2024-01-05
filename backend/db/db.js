const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB Connected Successfully...", process.env.MONGO_DB_URL);
  } catch (error) {
    console.log("Error Occured During DB Connection....", error);
  }
};
