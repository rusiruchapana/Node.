const mongoose = require("mongoose");


//configure userschemas and models
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});
const tour = mongoose.model("tour_details",user_schema);




module.exports= tour;