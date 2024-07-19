const express = require("express");
const router = express.Router();
const tour_details = require("../Models/tourModel");



//GET API.
router.get("/",(req,res)=>{
    
});


//POST API.
router.post("/", async (req,res)=>{
    const tour = new tour_details({
        name: req.body.name,
        email: req.body.email
    });

    try {
        const new_tour = await tour.save();
        res.status(201).json({
            status: "success",
            tour: new_tour
        });

    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});





module.exports = router;


