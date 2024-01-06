const express = require("express");
const {
  getAllMembers,
  createMember,
  viewAddPage,
  viewEditPage,
  deleteMember,
  allMembers,
} = require("../controllers/member");

const memberAdminRouter = express.Router();
const memberAPIRouter = express.Router();

/*
 * Routes for Admin Panel
 */
memberAdminRouter
  .get("/", getAllMembers)
  .get("/addPage", viewAddPage)
  .post("/add", createMember)
  .get("/edit/:id", viewEditPage)
  .delete("/delete/:id", deleteMember);

/*
 * Routes for API
 */
memberAPIRouter.get("/", allMembers);

module.exports = { memberAdminRouter, memberAPIRouter };
