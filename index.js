const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("<h1>Server running!</h1>");
});

app.listen(5000, console.log("Server running on port 5000"));
