
const express = require("express")
var app = express()

var Movie = require("../models/Movies.js")

app.post("/mandioca", function(req, res) {
    Movie.find( { $and : [ {title: { $regex: req.body.title, $options: "i"}}, { year: { $regex: req.body.year , $options:"i"}} , {rate: { $regex: req.body.rate, $options: "i"}} ] }, function(err, result) {
        res.render("display", {movies: result})
    })
})

module.exports = app