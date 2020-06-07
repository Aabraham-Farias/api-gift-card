const express = require('express');

const router = express.Router();
const { AddressesController } = require('../controller');

router.post('/addresses', AddressesController.create);
router.get('/addresses', AddressesController.find);
router.get('/addresses:id', AddressesController.findById);
// router.patch('/addresses:id', AddressesController.findByIdAndUpdate);
// router.delete('/addresses:id', AddressesController.findByIdAndDelete);

module.exports = router;
