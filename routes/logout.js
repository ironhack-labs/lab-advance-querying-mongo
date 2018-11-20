
const express = require("express")
var app = express()

app.get("/loguit", function(req, res) {
    res.clearCookie("hi")
    res.render("login")
})

module.exports = app