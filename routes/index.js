'use strict'

const express = require('express');
const InformationCtrl = require('../controllers/dream');
const api = express.Router();


api.get('/information',InformationCtrl.getAllInformation);
api.get('/information/:date',InformationCtrl.obtainInformation);
api.get('/save-information/:co2/:cx/:cy',InformationCtrl.saveInformation);
api.delete('/delete-information',InformationCtrl.deleteInformation);

module.exports = api;