const reviewServiece = require("../servieces/reviweServiece");

const createReview = async (req, res) => {
    try {
        const response = await reviewServiece.createReview(req.body);
        return res.json({
            status : 200,
            success : true,
            message : "created review",
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

const destroyReview = async (req, res) => {
    try {
        const response = await reviewServiece.destroyReview(req.params.id);
        return res.json({
            status : 200,
            success : true,
            message : "deleted review",
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

const updateReview = async () => {

}

const getReview = async (req, res) => {
    try {
        const response = await reviewServiece.getReview(req.params.user, req.params.flight);
        return res.json({
            status : 200,
            success : true,
            message : "fetched review",
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

const getAllReview = async (req, res) => {
    try {
        const response = await reviewServiece.getAllReview(req.params.flight);
        return res.json({
            status : 200,
            success : true,
            message : "fetched all review",
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
    createReview,
    destroyReview,
    updateReview,
    getReview,
    getAllReview
}