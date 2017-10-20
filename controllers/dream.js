'use strict'

const information = require('../models/model');

function getAllInformation(req,res){
	information.find({},(err,data) =>{
		if(err) return res.status(500).send({message: 'Error al realizar la peticion.'});
		if(!data) return res.status(404).send({message: 'No hay informacion guardada.'});

		res.jsonp(200,{data});
	});
}

function saveInformation(req,res){
	let data = new information();
	
	data.co2 = req.params.co2;
	data.cx = req.params.cx;
	data.cy = req.params.cy;

	data.save((err,fact) => {
		if(err) res.status(500).send({message: 'Error al guardar en la BD.'}); 
		else console.log('Dato guardado.'); 		
	});
	res.status(200).jsonp({data});
}

function obtainInformation(req,res){
    let predictionDate = req.params.date;
    
    information.find({fecha:predictionDate},(err,prediccion) =>{
        res.status(200).jsonp({prediccion});
    });
}

function deleteInformation(req,res){
	information.find({},(err,data) =>{
		if(err) res.status(500).send({message: 'Error al borrar la informacion.'});

		information.remove((err) => { 
			if(err) res.status(500).send({message: 'Error al borrar la informacion.'});
			res.status(200).send({message: 'La data ha sido eliminada.'});
		});
	});
}

module.exports = {
	getAllInformation,
	saveInformation,
	obtainInformation,
	deleteInformation
}

