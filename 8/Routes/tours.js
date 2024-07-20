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
    
    console.log(req.body); 
    try {
        const save_details = await tour_details.create(req.body);
        res.status(200)
            .json({
                status:"success.",
                tour:{
                    save_details
                }
            });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }

});


//UPDATE API
router.patch("/:id", async (req,res)=>{
        try {
            const update_tour = await tour_details.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true});
            if(!update_tour){
                res.status(404).json({
                    status:"Failed",
                    message:"Not Found"
                });
            }else{
                res.status(200).json({
                    status:"sucess.",
                    tour:{
                        update_tour
                    }
                });
            }
            
        } catch (err) {
            res.status(400).json({
                status: "failed",
                message: err.message
            });
        }
});

//DELETE API.
router.delete("/:id", async (req,res)=>{
    try {
        const delete_tour = await tour_details.findByIdAndDelete(req.params.id);
        res.status(204).send("Deleted");


    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});





module.exports = router;


