const express = require("express");
const {
  expenseList,
  createExpense,
  expenseAPIList,
  viewAddPage,
  viewEditPage,
  deleteExpense,
} = require("../controllers/expense");

const expenseRouter = express.Router();
const expenseApiRouter = express.Router();
/*
 * Routes For Expense (Admin Panel)
 */
expenseRouter
  .get("/", expenseList)
  .get("/addPage", viewAddPage)
  .post("/add", createExpense)
  .get("/edit/:id", viewEditPage)
  .delete("/delete/:id", deleteExpense);

/*
 * Routes For Expense (API)
 */
expenseApiRouter.get("/", expenseAPIList);

module.exports = { expenseRouter, expenseApiRouter };
