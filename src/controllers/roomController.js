const {room} = require('../services');

class roomController {
    createRoom(req, res){
        room.createRoom(req, res);
    }
    getRooms(req, res){
        room.getRoom(req, res);
    }
    getSpecificRoom(req, res){
        room.getSpecificRoom(req, res);
    }
    updateRoom(req, res){
        room.updateRoom(req, res);
    }
    deleteRoom(req, res){
        room.deleteRoom(req, res);
    }
}
module.exports = new roomController();