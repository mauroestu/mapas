'use strict'

const express = require('express');
const InformationCtrl = require('../controllers/dream');
const api = express.Router();


api.get('/information',InformationCtrl.getAllInformation);
api.get('/information/:date',InformationCtrl.obtainInformation);
<<<<<<< HEAD
api.get('/save-information/:co2/:cx/:cy',InformationCtrl.saveInformation);
=======
api.get('/save-information/:value',InformationCtrl.saveInformation);
>>>>>>> origin/master
api.delete('/delete-information',InformationCtrl.deleteInformation);

module.exports = api;
