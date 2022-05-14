const {host} = require('../services');

class MediaController {
    createMedia(req, res){
        host.media.createMedia(req, res);
    }
    getMedias(req, res){
        host.media.getMedia(req, res);
    }
    updateMedia(req, res){
        host.media.updateMedia(req, res);
    }
    deleteMedia(req, res){
        host.media.deleteMedia(req, res);
    }
    genPresignURL(req, res){
        host.media.genPresign(req, res);
    }
}
module.exports = new MediaController();