const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

let Usuario = new Schema({
    name : {String }, 
    email: {String}, 
    tipo : {String}, 
    numeroTelefonico : {String}, 
    
}, 
{
    collection : 'usuarios'
}); 

module.exports = mongoose.model('Usuario', Usuario); 