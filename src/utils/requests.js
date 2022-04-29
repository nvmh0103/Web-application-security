class requests{  
    okRequest(res, message, returnObj){
        if (returnObj){
            return res.status(200).send({message, data: returnObj});
        }
        return res.status(200).send({message});
    }
    getManyRequest (res, message, returnObj, pagination){
        return res.status(200).send({message, data: returnObj, pagination});
    }
    badRequest(res, err){
        return res.status(400).send({err});
    }
    notFoundRequest(res, message){
        return res.status(404).send({message});
    }
    InteralServerError(res, err){
        return res.status(500).send({err});
    }
    NotLoggedInError(res){
        return res.status(401).send({err: 'Please log in!'});
    }
    NotAuthorizedError(res){
        return res.status(403).send({err: 'Not Authorized'});
    }
    createSuccessRequest(res, message, returnObj){
        if (returnObj){
            return res.status(201).send({message, data: returnObj});
        }
        return res.status(201).send({message});
    }

}

module.exports = new requests();