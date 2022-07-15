
'use strict'

const empresaModel=require('../models/empresa')
var validator= require('validator');
const empresa = require('../models/empresa');


var controller={

    //new incorporation of the company
    buscarIncorporacionNueva:(req,res)=>{
        empresaModel.find().sort({fecha_alta:-1})
        .exec((err,resultadosFechas)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message: 'Error'
                });
            }
            return res.status(200).send({
                status: 'success',
                resultadosFechas
            })
        })
    },
    //the most oldest incorporation of the company
    buscarIncorporacionAntigua:(req,res)=>{
        empresaModel.find().sort({fecha_alta:+1})
        .exec((err,resultadosFechas2)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Error'
                });
            }
            return res.status(200).send({
                status:'success',
                resultadosFechas2
            })
        })
    },
    //it searchs employee salaries from oldest to youngest
    buscarSalarioAlto:(req,res)=>{
        empresaModel.find().sort({salario:+1}).limit()
            
            .exec((err,resultadoSalarios)=>{
                if(err){
                    return res.status(500).send({
                        status:'error',
                        message: 'Error'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    resultadoSalarios
                })
            })
    },
    buscarSalarioBajo:(req,res)=>{
        empresaModel.find().sort({salario:-1}).limit()
            
            .exec((err,resultadoSalarios)=>{
                if(err){
                    return res.status(500).send({
                        status:'error',
                        message: 'Error'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    resultadoSalarios
                })
            })
    },
    //it searchs employee
    buscarEmpleado:(req,res)=>{
        var buscarNombre=req.params.nombre;
        var buscarApellidos=req.params.apellidos;
        
        empresaModel.find(
            {"nombre":buscarNombre, "apellidos":buscarApellidos},
        ).sort()
        .exec((err, resultado)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message: 'Error'
                });
            }
            return res.status(200).send({
                status: 'success',
                resultado
            })
        })
        
    },
    //it saves employees in database
    guardarEmpleado:(req,res)=>{
        var params=req.body;
        console.log(params);
        console.log(params.nombre)

        try{
            var validate_nombre=!validator.isEmpty(params.nombre);
            var validate_apellidos=!validator.isEmpty(params.apellidos);
            var validate_oficio=!validator.isEmpty(params.oficio);
            var validate_departamento=!validator.isEmpty(params.departamento);
            var validate_fecha_alta=!validator.isEmpty(params.fecha_alta);
            var validate_salario=!validator.isEmpty(params.salario);
            var validate_seguridadsocial=!validator.isEmpty(params.seguridadsocial);
            var validate_telefono=!validator.isEmpty(params.telefono);
        }catch(err){
            return res.status(400).send({
                status:'error',
                message:'Faltan datos por enviar'
            });
        }

        if(validate_nombre && validate_apellidos && validate_oficio && validate_departamento && validate_fecha_alta && validate_salario &&validate_seguridadsocial && validate_telefono){
            empresaModel.find(
                {'nombre':params.nombre, 'apellidos':params.apellidos},
            ).sort()
            .exec((err,resultados2)=>{
                if(err){
                    return res.status(500).send({
                        status:'error',
                        message:'Error en el servidor'
                    });
                }
                if(resultados2==''){
                    var datosEmpresa=new empresaModel();
                    datosEmpresa.nombre=params.nombre;
                    datosEmpresa.apellidos=params.apellidos;
                    datosEmpresa.departamento=params.departamento;
                    datosEmpresa.oficio=params.oficio;
                    datosEmpresa.fecha_alta=params.fecha_alta;
                    datosEmpresa.salario=params.salario;
                    datosEmpresa.seguridadsocial=params.seguridadsocial;
                    datosEmpresa.telefono=params.telefono;
                
                    datosEmpresa.save((err,empleadoGuardado)=>{
                    //Error
                    if(err || !empleadoGuardado){
                        return res.status(404).send({
                            status:'error',
                            message: 'Los datos del empleado no se han guardado'
                        });
                    
                    }
                    //it saves the information to the employment
                
                    return res.status(200).send({
                        status:'success',
                        datosEmpresa:empleadoGuardado
                        });
                    });
                }else{
                    //it has found other person with this name and subname
                    return res.status(200).send({
                        status:'error',
                        message:'No podemos procesar su solicitud, ya existe un empleado con esos datos '
                    });
                }
            });
        }else{
            //Error
            return res.status(404).send({
                status:'error',
                message:'Los datos no son validos'
                });
            }
        },
        //delete employee
        deleteEmpleado:(req,res)=>{
            var borrarNombre=req.params.nombre;
            var borrarApellidos=req.params.apellidos;
            empresaModel.findOneAndDelete({nombre:borrarNombre, apellidos: borrarApellidos}, (err,empleadoRemove)=>{
                if(err){
                    return res.status(500).send({
                        status:'error',
                        message: 'Error al borrar'
                    });
                }

                if(!empleadoRemove){
                    return res.status(404).send({
                        status:'error',
                        message: 'No se ha podido borrar'
                    });
                }
                return res.status(200).send({
                    status: 'succes',
                    empleado: empleadoRemove
                })
            })
        }

};


module.exports= controller;