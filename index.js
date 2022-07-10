'use strict'
//config express and body-parser
var express=require ("express");
var bodyParser = require('body-parser')
//mongoose
var mongoose=require('mongoose');

//Configuration the .env file
const dotenv=require('dotenv');
dotenv.config()
//port
const port= process.env.PORT || 3500;

var app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const empresarutas= require('./src/routes/empresaRoutes')

//conection database mongoDB
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://carol:user@mern.pilzx.mongodb.net/empresa?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
    console.log('La conexión a la bbdd se ha realizado correctamente');

    //port server
    app.listen(port,()=>{
        console.log('Servidor corriendo');
    });

})

//middleware CORS to connect to the frontend
app.use((req, res, next) => {
    //Configuramos el control de acceso para que cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    //permitimos métodos http 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a las rutas /Cargar rutas
app.use('/api',empresarutas);

module.exports=app;