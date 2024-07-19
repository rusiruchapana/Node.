const express = require("express");
const router = express.Router();
const tour_details = require("../Models/tourModel");



//GET API.
//GET ALL TOURS.
router.get("/", async (req,res)=>{
    try {
        const get_all_tours = await tour_details.find();
        res.status(201).json({
            status: "success",
            tour: {
                get_all_tours
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});



//GET A SINGLE TOUR.
router.get("/:id", async (req,res)=>{
    try {
        const get_one_tour = await tour_details.findById(req.params.id);
    
        res.status(201).json({
            status: "success",
            tour: {
                get_one_tour
            }
        });
        
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
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
            tour: {
                tour
            }
        });

    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});





module.exports = router;


