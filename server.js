const express = require("express");
const app = express();
const port = 3000;
const siteAddress = `http://localhost:3000/`;

  app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
  });

app.listen(port, () => {
  console.log(`See ${siteAddress} for pokemon data.`);
});