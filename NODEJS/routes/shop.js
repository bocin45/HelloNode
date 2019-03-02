const express = require('express');
const path = require('path');

const router = express.Router();

//shop/
router.get('/',(req,res,next) =>{
    console.log('Done');
    // res.send('<h1>Product Save</h1>');
    res.sendfile(path.join(__dirname,'../','views','shop.html'))

});

module.exports = router;