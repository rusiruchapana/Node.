const  express = require('express')
const app = express()
app.use(express.static("./public"));
const tourRouter = require("./routes/tours");
require("dotenv").config();
const port = process.env.PORT;


//connect to mongodb atlas cloud database.
const mongoose = require("mongoose");
const url = "mongodb+srv://rusiru:" + process.env.PASS + "@isuru.yeeakum.mongodb.net/tours?retryWrites=true&w=majority&appName=Isuru";

mongoose.connect(url)
    .then(()=>{
        console.log("Database succesfully created.");
    })
;





//time
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});



app.use("/tour",tourRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});