const express = require("express");
const logger = require("morgan");

const mongoose = require("mongoose")
const app = express();
const Recipe = require("./models/Recipe.model")

// MIDDLEWARE
app.use(logger("dev"));
 app.use(express.json());
// DATABASE CONNECTION


const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
    .connect(MONGODB_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo", err));

// ...

// ROUTES
//  GET  / route - This is just an example route
 app.get('/', (req, res) => {
 })
//  Iteration 3 - Create a Recipe route
//  POST  /recipes route

app.post("/recipes", (req, res) => {

    Recipe.create(req.body)
        .then((recipeEl) => {
            res.json(recipeEl)
        })
        .catch(err => console.log(err))
})


//  Iteration 4 - Get All Recipes
//  GET  /recipes route

app.get("/recipes", (req, res) => {

    Recipe.find({})
        .then(allRecipes => {
            res.json(allRecipes)
        })
        .catch(err => console.log(err))
})


//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route

app.get("/recipes/:id", (req, res) => {

    const { id } = req.params;

    Recipe.findById(id)
        .then((recipeFound) => {
            res.json(recipeFound)
        })
        .catch(err => console.log(err))
})

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route

app.put("/recipes/:id", (req, res) => {

    const { id } = req.params;

    Recipe.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedRecipe) => {
            res.json(updatedRecipe)
        })
        .catch(err => console.log(err))
})


//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route


app.delete("/recipes/:id", (req, res) => {

    const { id } = req.params;

    Recipe.findByIdAndDelete(id)
        .then((result) => {
            res.status(204).send()
        })
        .catch(err => console.log(err))
})


// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000!'));
