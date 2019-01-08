const mongoose = require('mongoose');
const {Schema} = mongoose;


const TelasSchema = new Schema({
    nombre: {type: String, required: true },
    precio: {type: Number, required:true },

});

module.exports = mongoose.model('Telas', TelasSchema );