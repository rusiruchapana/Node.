const express =  require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
//app.use(express.json());

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






const tours_routes = require("./Routes/tours");
app.use("/tours",tours_routes);


app.get("/rusiru",(req,res)=>{
    console.log("ddddddddddd");
    res.send("SImple get request.");
});



app.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
});






