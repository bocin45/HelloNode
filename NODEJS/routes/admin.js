const express = require('express');
const path = require('path');
const rootDir = require('../path/path.js');

const router  = express.Router();

//admin/add-product => GET
router.get('/add-product',(request, response, next)=>{
    // response.send('<form action=/admin/add-product method=POST><input type="text" name="message"><button type="Submit">Tambah Produk</button></form>');
    response.sendfile(path.join(rootDir,'views','add-product.html'))
});

//admin/product => POST
router.post('/add-product',(request, response, next)=>{
    console.log(request.body);
    console.log("tesss");
    response.redirect('/shop');
});

module.exports = router;