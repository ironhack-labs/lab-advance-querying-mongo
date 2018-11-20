
const express = require("express")
var app = express()
const bcrypt = require("bcrypt")


var NewUser = require("../models/Users.js")

app.get("/register", function(req, res) {
    res.render("register")
})

app.post("/register", function(req, res) {
    bcrypt.hash(req.body.password, 5, function(err, hash) { // create new user
        var user = new NewUser (
            {username: req.body.username,
            password: hash
        })
        user.save(function (err) {
            if (err) return handleError(err);
            res.render("thanks")
          })
        });
 })


module.exports = app