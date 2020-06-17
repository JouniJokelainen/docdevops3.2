const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Devops with Docker 2020 - task 3.2");
});

app.listen(80, () => {
  console.log("Server running..");
});
