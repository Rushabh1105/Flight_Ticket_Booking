const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    passward : {
        type : String,
        required : true,
    }
},{timestamps : true});

userSchema.pre("save",async function encryptPassword(next){
    const user = this;
    const hash = await bcryptjs.hash(this.passward, 10);
    this.passward = hash;
    next();
});

userSchema.methods.isValidPassward = async function checkValidity(passward){
    const user = this;
    const compare = await bcryptjs.compare(passward, user.passward);
    return compare;
}

const User = mongoose.model("User", userSchema);

module.exports = User;