require("dotenv").config();

const express = require("express");
const app = express();

const Pokemon = require("./models/PokemonSchema.js");

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

const mongoose = require("mongoose");

// DB CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send('Welcome to the <a href="/pokemon">Pokemon</a> App!');
});

app.get("/pokemon", (req, res) => {
  Pokemon.find({}).then((allPokemon) => {
    res.render("Index", {
      pluralPokemon: allPokemon,
    });
  });
});

app.get("/pokemon/new", function (req, res) {
  res.render("New");
});

app.post("/pokemon", async function (req, res) {
  try {
    const newPokemon = await Pokemon.create(req.body);
    return res.redirect("/pokemon");
  } catch (err) {
    res.send(`error in adding pokemon`);
    console.error(err);
  }
});

app.get("/pokemon/:id", async function (req, res) {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.send(err);
    console.error(err);
  }
});

const port = 3000;
const siteAddress = `http://localhost:3000/`;

app.listen(port, () => {
  console.log(`See ${siteAddress} for pokemon data.`);
});
