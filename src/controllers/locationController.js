const {location} = require('../services');

class locationController {
    createLocation(req, res){
        location.createLocation(req, res);
    }
    getLocations(req, res){
        location.getLocation(req, res);
    }
    updateLocation(req, res){
        location.updateLocation(req, res);
    }
    deleteLocation(req, res){
        location.deleteLocation(req, res);
    }
}
module.exports = new locationController();