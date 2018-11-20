
const express = require("express")
var app = express()

app.get("/create", function(req, res) {
    res.render("create")
}) //GET makes the / "/_" show on the browser

app.post("/create", function(req, res) {
    var movie = new Movie(req.body)
    movie.save(function (err) {
        if (err) return handleError(err);
        res.render("create")
      })
}) 

module.exports = app