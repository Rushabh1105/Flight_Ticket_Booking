const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true,
    },
    flight : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Flight",
        required : true,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    status : {
        type : String,
        required : true,
        default : "In Process",
        enum : ["Booked", "Cancelled", "In process"],
    }
}, {timestamps : true});

const Booking  = new mongoose.model("Booking", bookingSchema);

module.exports = Booking;