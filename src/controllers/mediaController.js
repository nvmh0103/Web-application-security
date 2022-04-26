const {media} = require('../services');

class MediaController {
    createMedia(req, res){
        media.createMedia(req, res);
    }
    getMedias(req, res){
        media.getMedia(req, res);
    }
    updateMedia(req, res){
        media.updateMedia(req, res);
    }
    deleteMedia(req, res){
        media.deleteMedia(req, res);
    }
}
module.exports = new MediaController();