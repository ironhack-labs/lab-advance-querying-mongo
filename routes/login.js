
const express = require("express")
var app = express()

const bcrypt = require("bcrypt")

var NewUser = require("../models/Users.js")

app.get("/login", function(req, res) {
    res.render("login")
})

app.post("/login", function(req, res) {
    bcrypt.hash(req.body.password, 5, function(err, hash) {
        NewUser.findOne( { $and : [{username: req.body.username}, { password: hash}]}, 
            function(err, result){
                if(err){
                    throw err;
                } 
                if(!result) res.render("register");
                else{
                    res.cookie("username", result.username);
                    res.redirect("/search")

                }

            }
       )
    })
}


module.exports = app