const {user} = require('../services');

class BookingController {
    createBooking(req, res){
        user.booking.createBooking(req, res);
    }
    getBookings(req, res){
        user.booking.getBooking(req, res);
    }
    // updateBooking(req, res){
    //     booking.updateBooking(req, res);
    // }
    deleteBooking(req, res){
        user.booking.deleteBooking(req, res);
    }
}
module.exports = new BookingController();