
var mongoose = require('mongoose');

var ArtVentureSchema= new mongoose.Schema(
    {
        name: String,
        telephone: Number,
        email: String,
        field: String,
        rate: Number

    }
)

var av1=mongoose.model('ArtVenture-Artists',ArtVentureSchema)

module.exports =av1;