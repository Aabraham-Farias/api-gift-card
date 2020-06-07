const express = require('express');
const router = express.Router();

const { PymeController } = require('../controller');


router.post('/pymes', PymeController.create);
router.get('/pymes', PymeController.find);
router.get('/pymes/:id', PymeController.findById);
router.patch('/pymes/:id', PymeController.findByIdAndUpdate);
router.delete('/pymes/:id', PymeController.findByIdAndDelete);

module.exports = router;