require('dotenv').config();
const morgan = require('morgan');
const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});