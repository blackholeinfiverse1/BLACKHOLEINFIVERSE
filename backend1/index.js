const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

const conn = require("./db");
conn();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/api", require("./User/CreateUser"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});