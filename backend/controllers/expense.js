const Expense = require("../models/Expense");

/*
 * For Admin Panel
 */
const expenseList = async (req, res) => {
  const allExpense = await Expense.find().sort({ createdAt: -1 });
  // res.status(200).send(allExpense);
  res.render("expenses/list", { result: allExpense });
};

const createExpense = async (req, res) => {
  const { productName, productPrice, productQuantity, image } = req.body;
  const newExpense = new Expense({
    productName,
    productPrice,
    productQuantity,
    image,
  });
  await newExpense.save();
  // res.status(201).send(newExpense);
  res.redirect("/admin/expense");
};

/*
 * For API
 */
const expenseAPIList = async (req, res) => {
  const allExpense = await Expense.find().sort({ createdAt: -1 });
  res.status(200).send(allExpense);
};

module.exports = {
  expenseList,
  createExpense,
  expenseAPIList,
};
