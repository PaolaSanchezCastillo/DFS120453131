const express = require('express'); 
const passport = require('passport'); 
const router = express.Router(); 
const User  = require('../model/User'); 

router.get('/users', (req, res) =>{
    res.send("Usuarios desde la BD"); 

}); 


router.post('/users/nuevo',(req, res) =>{
    console.log(req.body); 
    res.send("HOli");
    let errors = []; 
    const {nombreUsuario, mail, password, confirmPassword } = req.body; 
   

})


module.exports = router; 