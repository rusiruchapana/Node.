const { model } = require("mongoose");

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

module.exports = Tour;
