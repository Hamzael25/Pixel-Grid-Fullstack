const db = require("./database");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log("Welcome in The Pixel Grid Full Stack Project");
});

app.get("/grid", (req, res) => {
  try {
    const grid = db.prepare(`SELECT * FROM grid`).all();
    res.status(200).json({
      grid: grid,
    });
  } catch (error) {
    res.status(500).json({
      error: "An Error occured",
    });
  }
});
