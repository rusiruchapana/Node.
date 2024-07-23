const express =  require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
const fs = require("node:fs/promises");
const tour_details = require("./Models/tourModel");





//connect to the mongodb database.
const mongoose = require("mongoose");
//const db_url = "mongodb+srv://rusiru:"+process.env.PASSWORD+"@rusiru.fokxvs9.mongodb.net/"+ process.env.DB +"?retryWrites=true&w=majority&appName=rusiru";
const db_url = "mongodb+srv://rusiru:"+process.env.PASSWORD+"@rusiru.fokxvs9.mongodb.net/"+process.env.DB+"?retryWrites=true&w=majority&appName=rusiru";
mongoose.connect(db_url)
        .then(()=>{
            console.log("Succesfully connected to the database.");
        })
        .catch((err)=>{
            console.log("Error: ", err);
        });



//read all sample datas.
async function read_data(){
    try {
        const data = await fs.readFile("./dev-data/data/tours-simple.json","utf8");
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
//read_data();


//delete all datas in the database.
async function delete_data(){
    try {
        const delete_data = await tour_details.deleteMany({});
        console.log("Deleted succesfully.");
    } catch (error) {
        console.log("Error: ", error);
    }
}

//delete_data();







const tours_routes = require("./Routes/tours");
app.use("/tours",tours_routes);




app.listen(port, ()=>{
    
    console.log(`Server is started on ${port}`);
});






