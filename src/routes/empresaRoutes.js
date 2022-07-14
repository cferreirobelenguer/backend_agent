
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
router.get('/buscarmax/', empresaController.buscarSalarioAlto)
router.get('/buscarmin/', empresaController.buscarSalarioBajo)
router.get('/buscarminFecha/', empresaController.buscarIncorporacionNueva)
router.get('/buscarmaxFecha/', empresaController.buscarIncorporacionAntigua)
router.put('/actualizar/:nombre&:apellidos',empresaController.actualizarDatos)
module.exports= router;

