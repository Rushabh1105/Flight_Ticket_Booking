const Flight = require("../models/flight");

const createFlight =async (data) => {
    try {
        const newFlight = {
            flightNumber : data.flightNumber,
            departureAirport : data.departureAirport,
            arrivalAirport : data.arrivalAirport,
            airline : data.airline,
            flightDate : data.flightDate,
            duration : data.duration,
            departureTime : data.departureTime,
            arrivalTime : data.arrivalTime,
            price : data.price,

        }

        const response = await new Flight(newFlight).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateFlight = async (data) => {
    try {
        const response = await Flight.updateOne({flightNumber : data.flightNumber}, data);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const destroyFlight = async (flightNumber) => {
    try {
        const response = await Flight.findOneAndDelete({flightNumber : flightNumber});
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getFlight = async (flightNumber) => {
    try {
        const response = await Flight.findOne({flightNumber : flightNumber});
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAllFlight = async () => {
    try {
        const response = await Flight.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlight,

}