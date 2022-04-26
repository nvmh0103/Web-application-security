const {booking} = require('../services');

class BookingController {
    createBooking(req, res){
        booking.createBooking(req, res);
    }
    getBookings(req, res){
        booking.getBooking(req, res);
    }
    // updateBooking(req, res){
    //     booking.updateBooking(req, res);
    // }
    deleteBooking(req, res){
        booking.deleteBooking(req, res);
    }
}
module.exports = new BookingController();