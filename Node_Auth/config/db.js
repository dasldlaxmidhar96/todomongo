const mongoose = require("mongoose");

const DB = "mongodb+srv://kartik:kartikdas@cluster0.mbe6nxw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error));