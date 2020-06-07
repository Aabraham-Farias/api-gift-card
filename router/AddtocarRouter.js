const express = require('express');
<<<<<<< HEAD

=======
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
const router = express.Router();
const { AddtocartController } = require('../controller');

router.get('/addtocart/user/:id/products', AddtocartController.addcartoUser);
router.delete('/deletetocart/:idUser/product/:idProduct', AddtocartController.deleteProductByid);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
