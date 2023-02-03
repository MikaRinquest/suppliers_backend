const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8008;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Connection to server has been established");
  console.log(`Port available at localhost:${port}`);
  console.log("Press Ctrl + C to close localhost.");
});
