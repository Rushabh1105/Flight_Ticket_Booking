const Airline = require("../models/airline");
const airlineServiece = require("../servieces/airlineServiece");

const createAirline = async (req, res) => {
    try {
        const response = await airlineServiece.createAirline(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created airline",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create",
        })
    }
}

const updateAirline = async (req, res) => {

}

const destroyAirline = async (req, res) => {
    try {
        const response = await airlineServiece.destroyAirline(req.query.name);
        return res.json({
            status : 200,
            success : true,
            message : "deleted airline",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot destroy",
        })
    }
}

const getAirline = async (req, res) => {
    
    try {
        const response = await airlineServiece.getAirline(req.params.name)
        return res.json({
            status : 200,
            success : true,
            message : "fetched airline",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot fetch",
        })
    }
}

const getAllAirline = async (req, res) => {
    try {
        const response = await airlineServiece.getAllAirline();
        return res.json({
            status : 200,
            success : true,
            message : "fetched all airline",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot fetch",
        })
    }
}

module.exports = {
    createAirline,
    updateAirline,
    destroyAirline,
    getAirline,
    getAllAirline,
}