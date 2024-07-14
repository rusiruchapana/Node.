const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

//configure midleware.
app.use(express.json());



const tours_details = fs.readFileSync("./dev-data/data/tours-simple.json","utf8");
const tours_details_json = JSON.parse(tours_details);


app.get("/api/v1/tours",(req,res)=>{
    res.send({
        status: "200 Ok",
        data: {
            tours: tours_details_json
        }

    });
}); 


app.post("/api/v1/tours",(req,res)=>{
    console.log(req.body);
    res.send("Succesfully saved");
});








app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})