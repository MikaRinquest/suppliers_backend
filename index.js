const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8008;

const supplierRoute = require("./routes/supplierRoute");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "This is the home page" });
});

app.use("/suppliers", supplierRoute);

app.listen(port, () => {
  console.log("Connection to server has been established");
  console.log(`Port available at localhost:${port}`);
  console.log("Press Ctrl + C to close localhost.");
});
