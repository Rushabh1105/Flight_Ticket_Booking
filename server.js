const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");


const {connect} = require("./src/configs/database");
const apiRouter = require("./src/router/routes");
//const User = require("./src/models/user");
require("./src/utils/auth");
const authRouter = require("./src/router/authRouter");



const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use("/", authRouter);
app.use("/api", passport.authenticate("jwt", {session : false}),apiRouter);


app.get("/", (req, res) => {
    res.send({
        message : "hitting the api",
    })
})



app.listen(8080, async() => {
    await connect();

    console.log("database connected");

    console.log("server started....");
    /* const user = await User.create({
        email : "a@b.com",
        passward : "12345",
    }) */
    
})