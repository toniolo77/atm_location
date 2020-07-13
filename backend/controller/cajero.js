const Cajero = require('../model/cajero');


/**
 * Get the three nearest  ATM from your location
 * @params
 * red [string] is the type of ATM, LINK or BANELCO
 * longitude [number] the longitude of your location
 * latitude [number] the latitude of your location
 */
exports.getCajeros = (req, res, next) =>  {
    if(typeof req.query.red !== 'undefined' && typeof req.query.latitude !== 'undefined' && typeof req.query.longitude !== 'undefined') {
        const type_red = req.query.red.toUpperCase(),   
            latitude = req.query.latitude,
            longitude = req.query.longitude
            
        Cajero.find({$and : [{geoloc:{$near : { $maxDistance: 500,$geometry: {type: "Point",coordinates: [longitude,latitude]}}}}, {red: type_red}]})
              .select('id_app banco ubicacion red lat long')
              .limit(3)
              .then(p => {
                    res.status(200).send({status:1,res: p, msg: ""});
                })
    } else{
        res.status(200).send({status:0,res:{},msg:"The params are not correct"});
    } 

}