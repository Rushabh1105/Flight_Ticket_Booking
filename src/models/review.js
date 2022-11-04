const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    flight : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Flight",
        required : true,
    },
    text : {
        type : String,
        required : true,
    }
}, {timestamps : true});

const Review = new mongoose.model("Review", reviewSchema);

module.exports = Review;