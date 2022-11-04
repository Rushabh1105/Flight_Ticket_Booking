const bookingServiece = require("../servieces/bookingServiece");

const createBooking = async (req, res) => {
    try {
        const response = await bookingServiece.createBooking(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created booking",
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

const cancelBooking = async (req, res) => {
    try {
        const response = await bookingServiece.cancelBooking(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "cancelled booking",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot cancel",
        })
    }
}

const getBoardingPass = async (req ,res) => {
    try {
        const response = await bookingServiece.getBoardingPass(req.params.id)
        return res.json({
            status : 200,
            success : true,
            message : "fetched boarding pass",
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
    createBooking,
    cancelBooking,
    getBoardingPass,
}