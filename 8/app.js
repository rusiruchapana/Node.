const  express = require('express')
const app = express()
app.use(express.static("./public"));
const tourRouter = require("./routes/tours");
require("dotenv").config();
const port = process.env.PORT;


//connect to the database.
const mongoose = require("mongoose");
const conn_string = "mongodb+srv://rusiru:"+ process.env.PASSWORD +"@rusiru.fokxvs9.mongodb.net/"+ process.env.DATABASE +"?retryWrites=true&w=majority&appName=rusiru";
mongoose.connect(conn_string)
    .then(()=>{
        console.log("Connect succesfully to the "+ (process.env.DATABASE)+ " database.");
    });




//time
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});



app.use("/tour",tourRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});