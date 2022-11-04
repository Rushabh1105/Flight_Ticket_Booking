const express = require("express");



const router = express.Router();

router.get("/help", (req, res)=> {
    res.json({
        contact : "2332r5453",
    })
})


module.exports = router;