const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        require:true
    },
    createdAt: {
        type:Date,
        default:Date.now()
    }
});

const users = new mongoose.model("test.s",UserSchema);

module.exports = users;