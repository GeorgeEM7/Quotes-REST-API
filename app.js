const express = require("express");

const db = require("./data/database");

const quotesRouter = require("./routes/quotes.routes");

const app = express();

app.use("/quote", quotesRouter);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Connecting to the database failed");
  });
