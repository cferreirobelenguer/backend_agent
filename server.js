'use strict'
//mongoose
var mongoose=require('mongoose');
//import index.js
var app=require('./index');

//Configuration the .env file
const dotenv=require('dotenv');
dotenv.config()

//port
const port= process.env.PORT || 3500;


//conection database mongoDB
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://carol:user@mern.pilzx.mongodb.net/empresa?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('La conexión a la bbdd se ha realizado bien');

    //port server
    app.listen(port, '0.0.0.0',()=>{
        console.log('Servidor corriendo');
    });

})