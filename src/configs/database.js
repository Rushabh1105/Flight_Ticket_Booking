const mongoose = require("mongoose");

const connect = ()=>{
    console.log("database connection requested...");

    return mongoose.connect("mongodb://localhost/FlightTicket");
}

module.exports = {
    connect,
}