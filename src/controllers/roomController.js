const {room} = require('../services');

class roomController {
    createRoom(req, res){
        room.createRoom(req, res);
    }
    getRoom(req, res){
        room.getRoom(req, res);
    }
}
module.exports = new roomController();