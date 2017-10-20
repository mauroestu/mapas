'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hoy = new Date();
let fecha = hoy.getDate() + (hoy.getMonth() + 1) +  hoy.getFullYear();

const InformationSchema = Schema({
	cx : {type: String, required: true},
	cy: {type: String, required: true},
	co2: {type: Number, required: true},
    fecha: { type: Number, default: fecha}
});

module.exports = mongoose.model('information',InformationSchema);