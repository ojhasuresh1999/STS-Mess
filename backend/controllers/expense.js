const Expense = require("../models/Expense");
const Member = require("../models/Members");

/*
 * For Admin Panel
 */
const expenseList = async (req, res) => {
  const allExpense = await Expense.find()
    .populate({ path: "member", select: "name" })
    .sort({ createdAt: -1 });
  res.render("expenses/list", { result: allExpense });
};

const viewAddPage = async (req, res) => {
  const member = await Member.find();
  const expense = [];
  const data = { member: member, expense: expense };
  res.render("expenses/addEdit", { data: data });
};

const createExpense = async (req, res) => {
  try {
    const { id, productName, productPrice, productQuantity, image, member } =
      req.body;
    console.log("body=============>", req.body);
    if (id) {
      const expense = await Expense.findById(id);
      expense.productName = productName;
      expense.productPrice = productPrice;
      expense.productQuantity = productQuantity;
      expense.image = image;
      expense.member = member;
      await expense.save();
      res.redirect("/admin/expense");
    } else {
      const newExpense = new Expense({
        productName,
        productPrice,
        productQuantity,
        image,
        member,
      });
      await newExpense.save();
      // res.status(201).send(newExpense);
      res.redirect("/admin/expense");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const viewEditPage = async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findById(id);
  const member = await Member.find();
  const data = { expense, member };
  // console.log("data=============>", data);
  res.render("expenses/addEdit", { data: data });
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const delete1 = await Expense.findByIdAndDelete(id);
    // console.log("delete=============>", delete1);
    res.redirect("/admin/expense");
  } catch (error) {
    console.log(error);
  }
};

/*
 * For API
 */
const expenseAPIList = async (req, res) => {
  const allExpense = await Expense.find()
    .populate({ path: "member", select: "image" })
    .sort({ createdAt: -1 });
  res.status(200).send(allExpense);
};

module.exports = {
  expenseList,
  createExpense,
  expenseAPIList,
  viewAddPage,
  viewEditPage,
  deleteExpense,
};
