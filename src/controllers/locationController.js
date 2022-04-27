const {admin} = require('../services');

class locationController {
    createLocation(req, res){
        admin.location.createLocation(req, res);
    }
    getLocations(req, res){
        admin.location.getLocation(req, res);
    }
    updateLocation(req, res){
        admin.location.updateLocation(req, res);
    }
    deleteLocation(req, res){
        admin.location.deleteLocation(req, res);
    }
}
module.exports = new locationController();