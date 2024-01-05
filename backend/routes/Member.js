const express = require("express");
const Member = require("../models/Member");

const memberRouter = express.Router();

/*
 * Routes for Admin Panel
 */
memberRouter.get("/list", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.json({ message: error });
  }
});
