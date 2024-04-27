const express = require("express");

const app = express();
const port = process.env.PORT | 8000;

app.get("/", (req, res) => {
  req.status(201).json({
    mess: "server running",
    err: false,
  });
});

app.listen(port, () => {
  console.log("server running on " + port);
});
