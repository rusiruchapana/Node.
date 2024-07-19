const express =  require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

//connect to the mongodb database.
const mongoose = require("mongoose");
const db_url = "mongodb+srv://rusiru:rusirubB@rusiru.fokxvs9.mongodb.net/natour?retryWrites=true&w=majority&appName=rusiru";
mongoose.connect(db_url)
        .then(()=>{
            console.log("Succesfully connected to the database.");
        })
        .catch((err)=>{
            console.log("Error: ", err);
        });


const tours_routes = require("./Routes/tours");
app.use("/tours",tours_routes);




app.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
});






