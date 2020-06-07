const express = require('express');
const router = express.Router();

const { GiftController } = require('../controller');


router.post('/giftcards', GiftController.create);
router.get('/giftcards', GiftController.find);
router.get('/giftcards/:id', GiftController.findById);
router.patch('/giftcards/:id', GiftController.findByIdAndUpdate);
router.delete('/giftcards/:id', GiftController.findByIdAndDelete);


router.post('/pymes/:id/giftcards', GiftController.addGiftcardtoPyme);

module.exports = router;