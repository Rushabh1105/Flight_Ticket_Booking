const express = require("express");

const airlineController = require("../../controller/airlineController");


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



module.exports = router;