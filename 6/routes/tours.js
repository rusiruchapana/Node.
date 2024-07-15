const express = require("express");
const fs = require("fs");

const router = express.Router();


const tours_details = fs.readFileSync("./dev-data/data/tours-simple.json","utf8");
const tours_details_json = JSON.parse(tours_details);



//get all tours
router.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

const getAllTours = (req,res)=>{ 
    res
        .status(200)
        .send({
            time: req.requestTime,
            status: "Ok",
            data: {
                tours: tours_details_json
            }
        });
}




router.get("/", getAllTours);



module.exports = router;







