const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cajeroSchema= new Schema({
    long: { type: mongoose.Types.Decimal128, required: true},
    lat: { type: mongoose.Types.Decimal128, required: true},
    geoloc : {type: {type: String, default: 'Point',index: '2dsphere'},coordinates: {type: [Number], default: [0, 0]}},
    banco: { type: String, required: true},
    red: { type: String, required: true},
    ubicacion: { type: String},
    localidad: { type: String},
    terminales: { type: Number},
    no_vidente: { type: Number},
    dolares: { type: Number},
    calle: { type: String},
    altura: { type: Number},
    barrio: { type: String},
    comuna: { type: String},
    codigo_postal: { type: Number},
    codigo_postal_argentino: { type: String},
    
});

cajeroSchema.index({ geoloc: "2dsphere" });

module.exports = mongoose.model('Cajero',cajeroSchema);