import express from 'express'
import connect from './config/db.js';
const app = express();
const port = process.env.PORT | 8000;

app.get("/", (req, res) => {
  req.status(201).json({
    mess: "server running",
    err: false,
  });
});

app.listen(port, () => {
  connect();
  console.log("server running on " + port);
});
