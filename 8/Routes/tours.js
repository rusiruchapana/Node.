const express = require("express");
const router = express.Router();
const tour_details = require("../Models/tourModel");




router.get("/",(req,res)=>{
    
});


router.post("/",(req,res)=>{
    const coming_details= req.body;
    console.log(coming_details);
    res.send("saved");
});





module.exports = router;


