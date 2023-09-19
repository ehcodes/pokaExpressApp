const express = require("express");
const app = express();
const port = 3000;
const siteAddress = `http://localhost:3000/`;
const pokemon = require("./models/pokemon.js");

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send('Welcome to the <a href="/pokemon">Pokemon</a> App!');
});

app.get("/pokemon", (req, res) => {
  res.render('Index',{pokemon: pokemon});
});

app.get("/pokemon/new", function (req, res) {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect('/pokemon');
});

app.get("/pokemon/:id", (req, res) => {
  res.render('Show',{pokemon: pokemon[req.params.id]});
});

app.listen(port, () => {
  console.log(`See ${siteAddress} for pokemon data.`);
});