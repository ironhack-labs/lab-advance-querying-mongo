
const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var NewUser = mongoose.model('users', new Schema({ 
    username: String,
    password: String
}), 'users')

// mongoose.model("users", NewUser)

module.exports = NewUser // makes NewUser accessible in other files