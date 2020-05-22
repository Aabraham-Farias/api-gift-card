const express = require('express');
const router = express.Router();
const { ProductsController } = require('../controller');

router.post('/products', ProductsController.create);
router.get('/products', ProductsController.find);
router.get('/products/:id', ProductsController.findById);
router.patch('/products/:id', ProductsController.findByIdAndUpdate);
router.delete('/products/:id', ProductsController.findByIdAndDelete);

module.exports = router;