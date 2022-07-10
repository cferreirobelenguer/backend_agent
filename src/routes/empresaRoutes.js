
'use strict'
//import express
var express=require('express');
//import controller
var empresaController= require('../controller/empresaController')
//import router
var router=express.Router();

//Routes
router.get('/ver', empresaController.buscarEmpleado);
router.post('/save',empresaController.guardarEmpleado);
router.get('/prueba',empresaController.prueba);

module.exports= router;

