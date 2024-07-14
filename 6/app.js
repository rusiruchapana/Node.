const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

//configure midleware.
app.use(express.json());



const tours_details = fs.readFileSync("./dev-data/data/tours-simple.json","utf8");
const tours_details_json = JSON.parse(tours_details);


app.get("/api/v1/tours",(req,res)=>{
    res
        .status(200)
        .send({
            status: "Ok",
            data: {
                tours: tours_details_json
            }

        });
}); 


app.post("/api/v1/tours",(req,res)=>{
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


    
});








app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})