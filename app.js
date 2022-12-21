const express = require("express");
const mi = require("mongoimport");
const app = express();
const mongoose = require("mongoose");

const config = {
  fields: [], // {array} data to import
  db: "companiesDB", // {string} name of db
  collection: "companies",
};

mongoose.connect("mongodb://127.0.0.1/library-project").then((x) => {
  const data = x;
  console.log(data);
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
