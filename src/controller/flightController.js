const flightServiece = require("../servieces/flightServiece");

const createFlight = async (req, res) => {
    try {
        const response = await flightServiece.createFlight(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created flight",
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

const updateFlight = async (req, res) => {

}

const destroyFlight = async (req, res) => {
    try {
        const response = await flightServiece.destroyFlight(req.query.flightNumber);
        return res.json({
            status : 200,
            success : true,
            message : "deleted flight",
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

const getFlight = async (req, res) => {
    
    try {
        const response = await flightServiece.getFlight(req.params.flightNumber)
        return res.json({
            status : 200,
            success : true,
            message : "fetched flight",
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

const getAllFlight = async (req, res) => {
    try {
        const response = await flightServiece.getAllFlight(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "fetched all flight",
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
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlight,
}