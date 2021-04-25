const express = require('express'); 
const { toNamespacedPath } = require('path');
const app = express(); 
const usuarioRoute = express.Router(); 

let Usuario = require('../models/Usuario'); 


// Crear mi usuario  == CREATE == 
usuarioRoute.route('/create').post((req, res, next) => {
Usuario.create(req.body, (error, data) =>{
    if(error) {
        return next(error); 
    }else{
        res.json(data); 
    }
})
}); 


// Leer usuario == READ==  (ALL USERS)

usuarioRoute.route('/').get((req, res) => {
    Usuario.find((error, data) => {
        if(error) {
            return next(error); 
        }else{
            res.json(data); 
        }
    })
}); 

// Leer un usuario especifico (ONE SINGLE USER)

usuarioRoute.route('/read/:id').get((req, res) => {
    Usuario.findById(req.params.id, (error, data) =>{
        if(error) {
            return next(error); 

        }else{
            res.json(data); 
        }
    })
}); 

// Actualizar Usuario == UPDATE == 

usuarioRoute.route( '/update/:id').put((req, res, next) => {
    Usuario.findByIdAndUpdate(req.params.id), {
        $set : req,body
    },  (error, data) =>{
        if(error){
            return next(error); 
        }
        else{
            res.json(data); 
            console.log('Usuario Actualizado Correctamente'); 
        }
    }}); 
    

    // Eliminar Usuario == DELETE == 

usuarioRoute.route('/delete/:id').delete((req, res, next) => {
    Usuario.findOneAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error); 
        }else{
           res.status(200).json(
              {
                  msg: data
              }
           )
        }
    })
}); 

module.exports = usuarioRoute; 





