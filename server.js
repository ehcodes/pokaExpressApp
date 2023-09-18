const express = require("express");
const app = express();
const port = 3000;
const siteAddress = `http://localhost:3000/`;
const pokemon = require("./models/pokemon.js");

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

app.get("/", (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});


app.listen(port, () => {
  console.log(`See ${siteAddress} for pokemon data.`);
});