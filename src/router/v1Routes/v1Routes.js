const express = require("express");

const airlineController = require("../../controller/airlineController");
const flightController = require("../../controller/flightController");

const router = express.Router();

router.get("/help", (req, res)=> {
    res.json({
        contact : "2332r5453",
    })
})

router.post("/airline", airlineController.createAirline);
router.get("/airline/:name", airlineController.getAirline);
router.get("/airline", airlineController.getAllAirline);
router.delete("/airline", airlineController.destroyAirline);

router.post("/flight", flightController.createFlight);
router.get("/flight/:flightNumber", flightController.getFlight);
router.get("/flight", flightController.getAllFlight);
router.delete("/flight", flightController.destroyFlight);

module.exports = router;