const express = require('express'); 
const router = express.Router();
const Product = require('./../model/Product'); 

router.get('/productos/listaProductos', async(req, res) =>{
    const products = await Product.find().lean();
   // res.send("La lista de los products");
    res.render('products/listaProductos', {products});
});

router.get('/productos/agregarProducto',(req, res) =>{
    res.render('products/agregarProducto');
});


router.post('/productos/agregarProducto',async(req, res) =>{
   const {_id, nombreProducto, descripcion, precio, cantidad} = req.body;
   console.log(req.body);
   const erros = []; 

   if(!nombreProducto ){
       errors.push(
           {text: 'Falta nombre'}
       )
   }

   if(erros.length >  0){
    req.flash('successMessage', errors); 
    res.redirect('/productos/listaProductos'); 
       
   }else{
       // create

       const newProduct = new Product({_id, nombreProducto, descripcion, precio, cantidad}); 
       console.log(newProduct); 
       await newProduct.save(); // Guardar en la collection dentro de la BD
       req.flash('successMessage', 'Producto agregado correctamente'); 
       res.redirect('/productos/listaProductos');
   }
});

module.exports = router;