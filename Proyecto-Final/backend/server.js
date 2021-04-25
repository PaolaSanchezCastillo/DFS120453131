let express = require('express'); 
let path = require('path'); 
let mongoose = require('mongoose'); 
let cors = require('cors'); 
let bodyParser = require('body-parser'); 

dbConfig = require('./database/db'); 

// Configurar la BD 

mongoose.Promise = global.Promise; 
mongoose.connect(dbConfig.db, {
    useNewUrlParser : true, 

}).then(
    ()=>{
        console.log("Conexion exitosa")
    }, 
    error=>{
console.log('No se logro la conexion : ' + error)
    }
); 


// Configar el API 

// Especificar la conexion a las rutas 

// Especificar las rutas
 const userRoute  = require('../backend/routes/user.route'); 
 const app = express(); 

 app.use(bodyParser.json()); 
 app.use(bodyParser.urlencoded({
     extended: false
 })); 

 app.use(cors); 
 //Especificacion de directorios

 app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app'))); 
 app.use('/', express.static(path.join(__dirname, 'dist/msean-stack-crud-app')));

 app.use('/api', userRoute); 

 const port = process.env.PORT || 3000; 
 
 const server = app.listen(port, ()=>{
     console.log('Servidor conectado en el puerto' , + port); 
 }); 

 // Error Handler

//  app.use((req, res, next) =>{
//      next(createError(404)); 
//  }); 

//  app.use(function(req, res, next){
//      console.error(err.message); // Log error 
//      if(!err.statusCode) 
//  })

 
