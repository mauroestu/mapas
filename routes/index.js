'use strict'

const express = require('express');
const InformationCtrl = require('../controllers/dream');
const api = express.Router();


api.get('/information',InformationCtrl.getAllInformation);
api.get('/information/:date',InformationCtrl.obtainInformation);
api.get('/save-information/:value',InformationCtrl.saveInformation);
api.delete('/delete-information',InformationCtrl.deleteInformation);

module.exports = api;
