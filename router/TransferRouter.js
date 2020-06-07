const express = require('express');
const router = express.Router();

const { TransferController } = require('../controller');


router.post('/transfers', TransferController.create);
router.get('/transfers', TransferController.find);
router.get('/transfers/:id', TransferController.findById);
router.patch('/transfers/:id', TransferController.findByIdAndUpdate);
router.delete('/transfers/:id', TransferController.findByIdAndDelete);

module.exports = router;