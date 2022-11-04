const Booking = require("../models/booking");

createBooking = async (data) => {
    try {
        newBooking = {
            id : data.id,
            flight : data.flight,
            user : data.user,
            status : data.status,
        }
        const response = await new Booking(newBooking).save();
        return response;
        
    } catch (err) {
        console.log(err);
    }
}

cancelBooking = async (id) => {
    try {
        const response = await Booking.findOneAndDelete({id : id});
        return response;

    } catch (err) {
        console.log(err);
    }

}

getBoardingPass = async (id) => {
    try {
        const response = await Booking.findOne({id : id}).populate('flight').exec();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createBooking,
    cancelBooking,
    getBoardingPass,
}