const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


//configure userschemas and models
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const tour = mongoose.model("tour_details",user_schema);




router.get("/",(req,res)=>{
    res.send("Simple get API in tours.js file.");
});


module.exports = router;


