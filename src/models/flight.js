const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    flightNumber : {
        type : String,
        required : true,
    },
    departureAirport : {
        type : String,
        required : true,
    },
    arrivalAirport : {
        type : String,
        required : true
    },
    airline : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Airline",
        required : true,
    },
    flightDate : {
        type : Date,
        default: Date.now,

    },
    duration : {
        type : Number,
        required : true,
    },
    departureTime : {
        type : Timestamp,
    },
    arrivalTime : {
        type : Timestamp,
    },
    price : {
        type : Number,
        required : true,
    },
    boardingGate : {
        type : Number,
    }
}, {timestamps : true});

const Flight = new mongoose.model("Flight", flightSchema);

module.exports = Flight;