const {user} = require('../services');

class MediaController {
    createMedia(req, res){
        user.media.createMedia(req, res);
    }
    getMedias(req, res){
        user.media.getMedia(req, res);
    }
    updateMedia(req, res){
        user.media.updateMedia(req, res);
    }
    deleteMedia(req, res){
        user.media.deleteMedia(req, res);
    }
}
module.exports = new MediaController();