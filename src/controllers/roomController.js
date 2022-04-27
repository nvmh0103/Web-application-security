const {host} = require('../services');
const {user} = require('../services');

class roomController {
    createRoom(req, res){
        host.room.createRoom(req, res);
    }
    getRooms(req, res){
        user.room.getRoom(req, res);
    }
    getSpecificRoom(req, res){
        user.room.getSpecificRoom(req, res);
    }
    updateRoom(req, res){
        host.room.updateRoom(req, res);
    }
    deleteRoom(req, res){
        host.room.deleteRoom(req, res);
    }
}
module.exports = new roomController();