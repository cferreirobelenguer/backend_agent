
'use strict'
//import express
var express=require('express');
//import controller
var empresaController= require('../controller/empresaController');
const empresa = require('../models/empresa');
//import router
var router=express.Router();

//Routes
router.get('/ver/:nombre&:apellidos', empresaController.buscarEmpleado);
router.post('/save',empresaController.guardarEmpleado);
router.delete('/delete/:nombre&:apellidos', empresaController.deleteEmpleado)
module.exports= router;

