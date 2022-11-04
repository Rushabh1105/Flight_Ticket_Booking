const Airline = require("../models/Airline");

const createAirline =async (data) => {
    try {
        const newAirline = {
            name : data.name,
            website : data.website,
        }

        const response = await new Airline(newAirline).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateAirline = async (data) => {
    try {
        const response = await Airline.updateOne({name : data.name}, data);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const destroyAirline = async (name) => {
    try {
        const response = await Airline.findOneAndDelete({name : name});
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAirline = async (name) => {
    try {
        const response = await Airline.findOne({name : name});
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAllAirline = async () => {
    try {
        const response = await Airline.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createAirline,
    updateAirline,
    destroyAirline,
    getAirline,
    getAllAirline,

}