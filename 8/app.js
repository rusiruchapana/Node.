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




//create schema,model and documentations
const {Schema} = mongoose;
const tour_schema = new Schema({
    name: {
        type: String,
        require: [true,"Name can not be empty"],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        require: true
    }
});

const Tour = mongoose.model("tours_details" , tour_schema);
const doc1 = new Tour({
    name:"swarna",
    rating:4.3,
    price:563
});

doc1.save()
    .then(()=>{
        console.log("succesfully added");
    })
    .catch((err)=>{
        console.log("Error: ",err);
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