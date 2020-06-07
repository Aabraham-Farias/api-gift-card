const express = require('express');
const router = express.Router();
const { AddtocartController } = require('../controller');

router.get('/addtocart/user/:id/products', AddtocartController.addcartoUser);
router.delete('/deletetocart/:idUser/product/:idProduct', AddtocartController.deleteProductByid);

module.exports = router;