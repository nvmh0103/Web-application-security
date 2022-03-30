class requests{  
    okRequest(res, message){
        return res.status(200).send({message});
    }
    badRequest(res, err){
        return res.status(400).send({err});
    }
    InteralServerError(res, err){
        return res.status(500).send({err});
    }
    NotAuthorizedError(res, err){
        return res.status(403).send({err: 'Not Authorized'});
    }
    createSuccessRequest(res, message){
        return res.status(201).send({message});
    }

}

module.exports = new requests();