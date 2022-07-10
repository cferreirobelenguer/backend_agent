
'use strict'

var mongoose=require('mongoose')
var Schema=mongoose.Schema;

//config schema
var empresaSchema= Schema({
    nombre:String,
    apellidos:String,
    oficio:String,
    departamento:String,
    fecha_alta:String,
    salario:String,
    seguridadsocial:String,
    telefono:String,
});

module.exports= mongoose.model('empresa', empresaSchema)