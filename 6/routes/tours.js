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


//save tour 
const saveTour = (req,res)=>{
    console.log(tours_details_json.length);
    //using spread operator. 
    const new_data = req.body;
    const new_element = {id: tours_details_json.length};
    const saved_data = {...new_element , ...new_data};
    //console.log(saved_data);
    tours_details_json.push(saved_data);
    fs.writeFileSync("./dev-data/data/tours-simple.json",JSON.stringify(tours_details_json));
    res.status(201)
       .send({
            status: "ok",
            data: {
                tours: tours_details_json
            }
       });  
}

//get unique tour.
const getUniqueTour = (req,res)=>{
    const id = req.params;
    //console.log(id.id);
    //console.log(tours_details_json);
    tours_details_json.map((set)=>{
        if((set.id)==(id.id)){
            //console.log(set);
            res.status(201)
                .send({
                        status:"ok",
                        tours: set
                });
        }
    });   
}






router.get("/", getAllTours);
router.post("/", saveTour);
router.get("/:id", getUniqueTour);







module.exports = router;







