const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/globe-data", (req, res) => {
  const data = {};
  const files = ["data.json"];

  files.forEach((file) => {
    const rawData = fs.readFileSync(`./${file}`);
    const jsonData = JSON.parse(rawData);
    data[file.replace(".json", "")] = jsonData;
  });
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
