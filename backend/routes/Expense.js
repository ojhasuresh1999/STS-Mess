const express = require("express");
const {
  expenseList,
  createExpense,
  expenseAPIList,
} = require("../controllers/expense");

const expenseRouter = express.Router();
const expenseApiRouter = express.Router();
/*
 * Routes For Expense (Admin Panel)
 */
expenseRouter.get("/", expenseList).post("/", createExpense);

/*
 * Routes For Expense (API)
 */
expenseApiRouter.get("/", expenseAPIList);

module.exports = { expenseRouter, expenseApiRouter };
