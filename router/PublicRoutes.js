const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./ProductsRoutes'));
router.use(require('./AddtocarRouter'));
router.use(require('./TransferRouter'));
router.use(require('./GiftRoutes'));
router.use(require('./PymeRoutes'));

module.exports = router;