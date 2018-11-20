
const express = require("express")
var app = express()

app.use(express.static("public"))

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/video")
var db =  mongoose.connection;

var hbs = require("hbs")
hbs.registerPartials(__dirname + "/views/partials")
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

var cookieParser = require('cookie-parser')
app.use(cookieParser())

const bcrypt = require('bcrypt');

app.use("/", require("./routes/logout.js"))
app.use("/", require("./routes/login.js"))
app.use("/", require("./routes/register.js"))
// app.use("/", require("./routes/thanks.js"))
app.use("/", require("./routes/search.js"))
app.use("/", require("./routes/create.js"))

////////// Thanks //////////
app.get("/thanks", function(req, res) {
    res.render("thanks")
})

// search page
app.get("/search", function(req, res) {
    res.render("search")
})

app.post("/search", function(req, res) {
    res.render("search")
})


app.listen(3000, () =>{
    db.once("open", () =>{
        console.log("connected to db")
    });
    console.log("app running")
})


