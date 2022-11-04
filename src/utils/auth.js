const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;



const User = require("../models/user");


passport.use("signup", new localStrategy(
    {
        usernameField : "email",
        passwordField : "passward",
    },

    async(email,passward,done) => {
        try {
            const user = await User.create({email, passward});
            return done(null, user);
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
));


passport.use("login", new localStrategy(
    {
        usernameField : "email",
        passwordField : "passward",
    },

    async (email, passward, done) => {
        try {
            const user = await User.findOne({email});
            if(!user){
                return done(null, false, {message : "User not found"});
            }
            const validate = await user.isValidPassward(passward);
            if(!validate){
                return done(null, false,{message : "Wrong passward"});
            }

            return done(null, user,{message : "login successful"});
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
))


passport.use(new jwtStrategy(
    {
        secretOrKey : "TOP_SECRET",
        jwtFromRequest : extractJWT.fromUrlQueryParameter('secret_token'),
    },
    async (token, done) => {
        try {
                return done(null, token.user);
            } catch (err) {
                console.log(err);
                return done(err)
            }
        }
))