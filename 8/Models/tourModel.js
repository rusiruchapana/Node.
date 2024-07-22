const mongoose = require("mongoose");


//configure userschemas and models
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:[true,"A tour must have a duration."]
    },
    maxGroupSize:{
        type:Number,
        required:true
    },
    difficulty:{
        type:String,
        required:[true,"A tour must have a difficulty."]
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,"A tour must have a price."]
    },
    priceDiscount:Number,
    summary:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,"A tour must have a cover image."]
    } ,
    images: [String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates: [Date]
        
});

const tour = mongoose.model("tour_details",user_schema);
module.exports= tour;