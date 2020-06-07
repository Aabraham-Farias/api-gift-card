const express = require('express');
<<<<<<< HEAD

=======
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const router = express.Router();
const { ProductsController } = require('../controller');

router.post('/products', ProductsController.create);
router.get('/products', ProductsController.find);
router.get('/products/:id', ProductsController.findById);
router.patch('/products/:id', ProductsController.findByIdAndUpdate);
router.delete('/products/:id', ProductsController.findByIdAndDelete);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
