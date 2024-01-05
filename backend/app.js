require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan");
const conn = require("./db/db");
const { expenseRouter, expenseApiRouter } = require("./routes/Expense");
const app = express();
/*
 * DB Connection
 */
conn();

//! Middleware Configuration
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! View Engine
app.set("view engine", "ejs");

//! Admin Routes
app.use("/admin/expense", expenseRouter);

//! API Routes
app.use("/api/expense", expenseApiRouter);

//! Index Route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
