var mongoose = require('mongoose');


var ArtVentureSchema2 = new mongoose.Schema({
    name: String,
    telephone: Number,
    email: String,
    field: String,
})

var av2 = mongoose.model('ArtVenture-Hirers', ArtVentureSchema2)

module.exports = av2;